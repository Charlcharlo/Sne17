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

export const scottPilgrim = {
  pages: [
    {
      title: "Pages 1 and 2",
      type: "splash",
      src: `${window.location.origin}/ScottPilgrim/Page-1-2.png`,
    },
    {
      title: "Page 3",
      type: "comic",
      panels: [
        {
          cols: 12,
          rows: 5,
          src: `${window.location.origin}/ScottPilgrim/Page-3/panel-1.png`,
        },
        {
          cols: 6,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-3/panel-2.png`,
        },
        {
          cols: 6,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-3/panel-3.png`,
        },
        {
          cols: 7,
          rows: 2,
          src: `${window.location.origin}/ScottPilgrim/Page-3/panel-4.png`,
        },
        {
          cols: 5,
          rows: 2,
          src: `${window.location.origin}/ScottPilgrim/Page-3/panel-5.png`,
        },
        {
          cols: 12,
          rows: 2,
          src: `${window.location.origin}/ScottPilgrim/Page-3/panel-6.png`,
        },
      ],
    },
    {
      title: "Page 4",
      type: "comic",
      panels: [
        {
          cols: 5,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-4/panel-1.png`,
        },
        {
          cols: 7,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-4/panel-2.png`,
        },
        {
          cols: 7,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-4/panel-3.png`,
        },
        {
          cols: 5,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-4/panel-4.png`,
        },
        {
          cols: 6,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-4/panel-5.png`,
        },
        {
          cols: 6,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-4/panel-6.png`,
        },
        {
          cols: 12,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-4/panel-7.png`,
        },
      ],
    },
    {
      title: "Page 5",
      type: "comic",
      panels: [
        {
          cols: 12,
          rows: 5,
          src: `${window.location.origin}/ScottPilgrim/Page-5/panel-1.png`,
        },
        {
          cols: 4,
          rows: 4,
          src: `${window.location.origin}/ScottPilgrim/Page-5/panel-2.png`,
        },
        {
          cols: 8,
          rows: 4,
          src: `${window.location.origin}/ScottPilgrim/Page-5/panel-3.png`,
        },
        {
          cols: 12,
          rows: 3,
          src: `${window.location.origin}/ScottPilgrim/Page-5/panel-4.png`,
        },
      ],
    },
  ],
};
