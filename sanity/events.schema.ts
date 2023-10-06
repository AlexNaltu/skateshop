const events = {
  name: "events",
  title: "Events",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      require,
      options: { source: "title" },
    },

    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "dates",
      title: "Dates",
      type: "string",
    },
    {
      name: "locations",
      title: "Locations",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "mainimage",
      title: "Mainimage",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};

export default events;
