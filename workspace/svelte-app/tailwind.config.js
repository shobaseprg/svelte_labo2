module.exports = {
  mode: "jit",
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    content: ['./**/**/*.html', './**/**/*.svelte'],

    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
