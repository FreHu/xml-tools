module.exports = {
  ast: {
    type: "XMLDocument",
    rootElement: {
      type: "XMLElement",
      namespaces: [],
      name: "note",
      attributes: [],
      subElements: [
        {
          type: "XMLElement",
          namespaces: [],
          name: "to",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 15 },
              text: "bobi"
            }
          ],
          position: { startOffset: 11 },
          syntax: {
            openName: { image: "to", startOffset: 12 },
            closeName: { image: "to", startOffset: 21 }
          }
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: null,
          attributes: [],
          subElements: [],
          textContents: [],
          position: { startOffset: 29 },
          syntax: {}
        },
        {
          type: "XMLElement",
          namespaces: [],
          name: "from",
          attributes: [],
          subElements: [],
          textContents: [
            {
              type: "XMLTextContent",
              position: { startOffset: 41 },
              text: "john"
            }
          ],
          position: { startOffset: 35 },
          syntax: {
            openName: { image: "from", startOffset: 36 },
            closeName: { image: "from", startOffset: 47 }
          }
        }
      ],
      textContents: [
        {
          type: "XMLTextContent",
          position: { startOffset: 6 },
          text: "\n    "
        },
        {
          type: "XMLTextContent",
          position: { startOffset: 24 },
          text: "\n    "
        },
        { type: "XMLTextContent", position: { startOffset: 52 }, text: "\n" }
      ],
      position: { startOffset: 0 },
      syntax: {
        openName: { image: "note", startOffset: 1 },
        closeName: { image: "note", startOffset: 55 }
      }
    },
    position: { startOffset: 0 }
  }
};
