export const getStarValue = (
  index: number,
  pageX: number,
  props: {
    reteRefs: React.MutableRefObject<HTMLElement>[];
    allowHalf: boolean;
  },
): number => {
  const { allowHalf, reteRefs } = props;
  let value = index;
  if (allowHalf) {
    const reteIndexElement = reteRefs[index];
    const leftDistance = getOffsetLeft(reteIndexElement.current);
    const width = reteIndexElement.current.clientWidth;
    const hoveDistance = pageX - leftDistance;
    if (hoveDistance <= width / 2 && hoveDistance > 0) {
      value += 0.5;
    } else if (hoveDistance > width / 2) {
      value += 1;
    }
  } else {
    value = index + 1;
  }
  return value;
};

function getScroll(w: Window): number {
  let ret = w.pageXOffset;
  const method = 'scrollLeft';
  if (typeof ret !== 'number') {
    const d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getClientPosition(elem: HTMLElement) {
  let x: number;
  let y: number;
  const doc = elem.ownerDocument;
  const { body } = doc;
  const docElem = doc && doc.documentElement;
  const box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y,
  };
}

export function getOffsetLeft(el: HTMLElement) {
  const pos = getClientPosition(el);
  const doc = el.ownerDocument;
  // Only IE use `parentWindow`
  const w: Window = doc.defaultView || (doc as any).parentWindow;
  pos.left += getScroll(w);
  return pos.left;
}
