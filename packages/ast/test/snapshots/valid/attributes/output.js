module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: {},
      name: "note",
      attributes: [
        {
          type: "XMLAttribute",
          position: { startOffset: 6, endOffset: 16 },
          key: "attr1",
          value: "666",
          syntax: {
            key: { image: "attr1", startOffset: 6, endOffset: 10 },
            value: { image: '"666"', startOffset: 12, endOffset: 16 }
          }
        },
        {
          type: "XMLAttribute",
          position: { startOffset: 18, endOffset: 28 },
          key: "attr2",
          value: "333",
          syntax: {
            key: { image: "attr2", startOffset: 18, endOffset: 22 },
            value: { image: '"333"', startOffset: 24, endOffset: 28 }
          }
        }
      ],
      subElements: [],
      textContents: [],
      position: { startOffset: 0, endOffset: 36 },
      syntax: {
        openName: { image: "note", startOffset: 1, endOffset: 4 },
        closeName: { image: "note", startOffset: 32, endOffset: 35 },
        openBody: { startOffset: 0, endOffset: 29 },
        closeBody: { startOffset: 30, endOffset: 36 },
        attributesRange: { startOffset: 6, endOffset: 28 }
      }
    },
    position: { startOffset: 0, endOffset: 37 }
  }
};
