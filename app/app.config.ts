export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: "cursor-pointer",
      },
    },
    select: {
      slots: {
        item: "cursor-pointer",
        base: "cursor-pointer",
      },
    },
  },
})
