import { useEffect, useState } from "react";

/**
 * Many cutout PNGs carry a lot of empty transparent space around the subject,
 * which makes the portrait render small and off-centre. This loads the image,
 * finds the bounding box of its visible pixels, and returns a cropped copy.
 * Opaque images, or any failure, fall back to the original file untouched.
 *
 * Returns { src, ready } — `ready` flips to true once trimming has finished
 * (or been skipped), so the image can stay hidden until it has its final size.
 */
export default function useTrimmedImage(originalSrc) {
  const [state, setState] = useState({ src: originalSrc, ready: false });

  useEffect(() => {
    let cancelled = false;
    const done = (src) => !cancelled && setState({ src, ready: true });

    const img = new Image();
    img.onerror = () => done(originalSrc);
    img.onload = () => {
      try {
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0);
        const { data } = ctx.getImageData(0, 0, w, h);

        const visible = (x, y) => data[(y * w + x) * 4 + 3] > 16;
        let top = -1, bottom = -1, left = w, right = -1;

        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            if (visible(x, y)) {
              if (top === -1) top = y;
              bottom = y;
              if (x < left) left = x;
              if (x > right) right = x;
            }
          }
        }

        const tw = right - left + 1;
        const th = bottom - top + 1;
        const nothingToTrim = top === -1 || (tw >= w - 2 && th >= h - 2);
        if (nothingToTrim) return done(originalSrc);

        const out = document.createElement("canvas");
        out.width = tw;
        out.height = th;
        out.getContext("2d").drawImage(canvas, left, top, tw, th, 0, 0, tw, th);
        done(out.toDataURL("image/png"));
      } catch (err) {
        done(originalSrc);
      }
    };
    img.src = originalSrc;

    return () => {
      cancelled = true;
    };
  }, [originalSrc]);

  return state;
}