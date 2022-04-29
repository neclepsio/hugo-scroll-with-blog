# This is work in progress, no new feature is yet committed!

# Hugo Scroll With Blog!

A [Hugo](https://gohugo.io/) theme for both a pretty, quick and simple single-page and a blog.

## Credits

This is based on [Hugo Scroll](https://github.com/janraasch/hugo-scroll).

## Installation

If you already have a hugo site on your machine, you can simply add this theme via

```
git submodule add https://github.com/neclepsio/hugo-scroll-with-blog.git themes/hugo-scroll-with-blog
```

Then, adjust the `config.toml` as detailed below.

If you simply want to check out the `exampleSite`, you can run

```
git clone https://github.com/neclepsio/hugo-scroll-with-blog.git hugo-scroll-with-blog
cd hugo-scroll-with-blog
hugo server --source=exampleSite --themesDir=../..
```

For more information read the official [setup guide][hugo-setup-guide] of Hugo.

## Adjust configuration / config.toml

Please check out the `config.toml` included on the `exampleSite` of this theme.

## Content & structure

### Starting fresh

If you are starting fresh, simply copy over the contents of the `exampleSite` directory included in this theme to your source directory. That should give you a good idea about how things work, and then you can go on from there to make the site your own.

### Adding content

You can add **a new section to the homepage** via running

```
hugo new homepage/my-new-content.md
```

To create **a page separate from the homepage**, run

```
hugo new my-new-page.md
```

### Using icons

This theme includes the full set of [Fork Awesome 1.1.7 Icons][fork-awesome-icons]. Use the `{{<icon>}}`-[shortcode][hugo-shortcodes] with the respective "fa fa-ICONNAME"-`class` to use an icon directly in your `.markdown` files à la

```markdown
Look at this nice  envelope icon: {{<icon class="fa fa-envelope">}}. I took this from https://forkaweso.me/Fork-Awesome/icon/envelope/ :-)
```

For the full list of icons, see [Fork Awesome 1.1.7 Icons][fork-awesome-icons].

### Adding your branding / colors / css

Add a `custom_head.html` file to your `layouts/partials`-directory. In there you may add a `<style>` tag _or_ you may add a `<link>` tag referencing your own `custom.css` (in case you prefer to have a separate `.css` file). Checkout the `custom_head.html` file from the `exampleSite` directory to get started and to find more detailed instructions.

## Issues / Feedback / Contributing

Please use [GitHub issues](https://github.com/neclepsio/hugo-scroll-with-blog/issues) and [Pull Requests](https://github.com/neclepsio/hugo-scroll-with-blog/pulls).

## Special Thanks

- Go to [Hugo Scroll](https://github.com/janraasch/hugo-scroll), for the base of this theme.
- Go to [Yonatan Wolowelsky](https://github.com/grmmph), for the great [GhostScroll](https://github.com/grmmph/GhostScroll)-theme which formed the basis of this [Hugo](https://gohugo.io/)-theme.
- Go to [Pexels](https://www.pexels.com), for supplying those wonderful _free_ stock photos on the `exampleSite`.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © Ignazio Di Napoli

[hugo-setup-guide]: https://gohugo.io/getting-started/installing
[fork-awesome]: https://forkaweso.me/Fork-Awesome/
[fork-awesome-icons]: https://forkaweso.me/Fork-Awesome/icons/
[hugo-shortcodes]: https://gohugo.io/content-management/shortcodes/
