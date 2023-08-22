export const placeholder = {
  directory: "placeholder-pages",
  prefix: "page",
  ext: "jpg",
  count: 6,
};

export const placeholderZl = {
  directory: "placeholder-pages-zl",
  prefix: "ikhasi",
  ext: "jpg",
  count: 6,
};

export const pageOnePanels = {
  directory: "placeholder-panels",
  count: 6,
  layout: [
    {
      gridColumn: "span 2",
      gridRow: "1 / span 2",
    },
    {
      gridColumn: "span 2",
      gridRow: "1 / span 2",
    },
    {
      gridColumn: "span 2",
      gridRow: "1 / span 2",
    },
    {
      gridColumn: "span 3",
      gridRow: "span 2",
    },
    {
      gridColumn: "span 3",
      gridRow: "3 / span 2",
    },
    {
      gridColumn: "span 6",
      gridRow: "5 / span 2",
    },
  ],
};

export const bookSchema = {
  directory: String,
  pages: Array,
  count: Number, //this.pages.length,
};

export const pageSchema = {
  type: String, //comic or info
  //comic properties
  panels: Array, //see panel object
  double: Boolean,
  directory: String,
  //info properties
  content: String,
  images: "", //not sure how to do this yet. May be html actually.
};

export const panelSchema = {
  cols: Number, // from 1 to 12
  rows: Number, // from 1 to 12
  final: Boolean, //May be useful to go to next page
  src: String, //url
};

//Placeholder 2

export const panelBookPH = {
  pages: [
    {
      type: "comic",
      panels: [
        {
          cols: 4,
          rows: 4,
        },
        {
          cols: 4,
          rows: 4,
        },
        {
          cols: 4,
          rows: 4,
        },
        {
          cols: 6,
          rows: 4,
        },
        {
          cols: 6,
          rows: 4,
        },
        {
          cols: 12,
          rows: 4,
        },
      ],
    },
    {
      type: "comic",
      panels: [
        {
          cols: 3,
          rows: 4,
        },
        {
          cols: 3,
          rows: 4,
        },
        {
          cols: 6,
          rows: 4,
        },
        {
          cols: 9,
          rows: 4,
        },
        {
          cols: 3,
          rows: 4,
        },
        {
          cols: 3,
          rows: 4,
        },
        {
          cols: 9,
          rows: 4,
        },
      ],
    },
    {
      type: "comic",
      panels: [
        {
          cols: 8,
          rows: 4,
        },
        {
          cols: 4,
          rows: 4,
        },
        {
          cols: 12,
          rows: 8,
        },
      ],
    },
    {
      type: "comic",
      panels: [
        {
          cols: 6,
          rows: 3,
        },
        {
          cols: 6,
          rows: 3,
        },
        {
          cols: 12,
          rows: 3,
        },
        {
          cols: 12,
          rows: 6,
        },
      ],
    },
    {
      type: "comic",
      panels: [
        {
          cols: 6,
          rows: 6,
        },
        {
          cols: 6,
          rows: 3,
        },
        {
          cols: 6,
          rows: 3,
        },
        {
          cols: 12,
          rows: 3,
        },
        {
          cols: 12,
          rows: 3,
        },
      ],
    },
  ],
};
