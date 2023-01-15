class ElementsGenerator {
  static createElement(selector, className, text = '') {
    const elem = document.createElement(selector);
    elem.className = className;
    if (text) elem.textContent = text;
    return elem;
  }

  static createDivElement(className) {
    return this.createElement('div', className);
  }

  static createSectionElement(className) {
    return this.createElement('section', className);
  }

  static createArticleElement(className) {
    return this.createElement('article', className);
  }

  static createUlElement(className) {
    return this.createElement('ul', className);
  }

  static createLiElement(className) {
    return this.createElement('li', className);
  }

  static createParagraphElement(className, text) {
    return this.createElement('p', className, text);
  }

  static createSpanElement(className, text) {
    return this.createElement('span', className, text);
  }

  static createH1Element(className, text) {
    return this.createElement('h2', className, text);
  }

  static createH2Element(className, text) {
    return this.createElement('h2', className, text);
  }

  static createH3Element(className, text) {
    return this.createElement('h3', className, text);
  }

  static createButtonElement(className, text) {
    return this.createElement('button', className, text, alt);
  }

  static createLinkElement(className, href, text) {
    const elem = document.createElement('a');
    elem.className = className;
    elem.href = href;
    elem.textContent = text;
    return elem;
  }

  static createImageElement(className, href, alt) {
    const elem = new Image();
    elem.className = className;
    elem.href = href;
    elem.alt = alt;
    return elem;
  }
}

export default ElementsGenerator;