export const createElement = (tag, attr, {child, children, parent, cb} = {}) => {
  const element = document.createElement(tag);

  if (attr) {
    Object.assign(element, attr);
  }

  if (child && child instanceof HTMLElement) {
    element.append(child);
  }

  if (children && children.every(elem => elem instanceof HTMLElement)) {
    element.append(...children);
  }

  if (parent && parent instanceof HTMLElement) {
    parent.append(element);
  }

  if (cb && typeof cb === 'function') {
    cb(element);
  }

  return element;
}