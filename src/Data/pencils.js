export const pencils = {
  directory: "pencil-pages",
  pages: [
    {
      title: "Page 1",
      type: "splash",
      orientation: "portrait",
      src: `${window.location.origin}/Sne17/pencil-pages/page-1/page-1.jpg`,
    },
    {
      title: "Page 2",
      type: "comic",
      panels: [
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-2/panel-1.png`,
          style: {
            gridColumnStart: 1,
            gridColumnEnd: 13,
            gridRowStart: 1,
            gridRowEnd: 3,
          },
        },
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-2/panel-2.png`,
          style: {
            gridColumnStart: 1,
            gridColumnEnd: 13,
            gridRowStart: 3,
            gridRowEnd: 6,
            border: "none",
            zIndex: 3,
          },
        },
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-2/panel-3.png`,
          style: {
            gridColumnStart: 1,
            gridColumnEnd: 13,
            gridRowStart: 5,
            gridRowEnd: 7,
            // border: "none",
            zIndex: 2,
          },
        },
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-2/panel-4.png`,
          style: {
            gridColumnStart: 1,
            gridColumnEnd: 13,
            gridRowStart: 6,
            gridRowEnd: 10,
            margin: "-20px -10px 0",
            border: "none",
          },
        },
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-2/panel-5.png`,
          style: {
            gridColumnStart: 1,
            gridColumnEnd: 5,
            gridRowStart: 9,
            gridRowEnd: 13,
            zIndex: 4,
          },
        },
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-2/panel-6.png`,
          style: {
            gridColumnStart: 5,
            gridColumnEnd: 9,
            gridRowStart: 9,
            gridRowEnd: 13,
            zIndex: 4,
          },
        },
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-2/panel-7.png`,
          style: {
            gridColumnStart: 9,
            gridColumnEnd: 13,
            gridRowStart: 9,
            gridRowEnd: 13,
            zIndex: 4,
          },
        },
      ],
    },
    {
      title: "Page 3",
      type: "comic",
      panels: [
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-3/panel-1.png`,
          style: {
            gridColumnStart: 1,
            gridColumnEnd: 13,
            gridRowStart: 1,
            gridRowEnd: 4,
            border: "none",
            zIndex: "2",
          },
        },
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-3/panel-2.png`,
          style: {
            gridColumnStart: 1,
            gridColumnEnd: 13,
            gridRowStart: 3,
            gridRowEnd: 6,
            border: "none",
            marginTop: "-30px",
          },
        },
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-3/panel-3.png`,
          style: {
            gridColumnStart: 2,
            gridColumnEnd: 12,
            gridRowStart: 5,
            gridRowEnd: 7,
            border: "none",
            margin: "10px -20px 0",
          },
        },
        {
          src: `${window.location.origin}/Sne17/pencil-pages/page-3/panel-4.png`,
          style: {
            gridColumnStart: 1,
            gridColumnEnd: 13,
            gridRowStart: 6,
            gridRowEnd: 13,
            border: "none",
            zIndex: "-1",
            margin: "-20px -10px -10px",
          },
        },
      ],
    },
  ],
};
