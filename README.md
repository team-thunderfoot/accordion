# Accordion

<!-- The `tabs` package provides a tabbed interface functionality that allows for easy navigation between different content sections. It enables customization of the active tab class and the tab body class, providing a seamless user experience. -->

[Here's an example](https://team-thunderfoot.github.io/accordion/dist/index.html)

## Installation

```sh
npm install @teamthunderfoot/accordion
```

## Usage

```sh
import Tabs from "@teamthunderfoot/accordion";

class Page {
  constructor() {
    this.init();
    this.events();
  }

  init() {

    this.accordionA = new Accordion({
        accActive: "accordion-1",
        accActiveClass: "c--accordion-a--is-active",
        accBodyClass: "c--accordion-a__bd",
        accClose: true,
        accAllOpen: false,
        accTrigger: "tf-ds-acc-target",
        accBody: "tf-ds-acc-body",
        onChange: () => {
            //do something
        },
    })
  }

  events() {
  }
}

export default Page;

new Page();

```

<!--
In your HTML file, add the necessary elements for the tabs. Each tab group should have a unique identifier (e.g., `tab-a-1` or `tab-a-2`). Use the provided CSS classes and data attributes to specify the tab triggers, tab bodies, and select elements.

-   **Container:** The tab container element should have an ID attribute. Example: `id="tab-a-1"`.

-   **Triggers:** The tab triggers should have the following attributes:

    -   An attribute with a value equal to the ID of the tab body it should open. Example: `tf-ds-tab-to-open-a="tab-a-1-1"`.
    -   An attribute that specifies which container it belongs to. Example: `tf-ds-container="tab-a-1"`.
    -   If it's a tab and not a link, it should have an attribute that identifies it as a tab (not a link) with a value equal to the ID of the body it should open. Example: `tf-ds-tab-parent="tab-a-1-1"`.

-   **Bodies:** The tab body should have:

    -   An ID attribute. Example: `id="tab-a-1-1"`.
    -   An attribute with a value equal to the same ID as the body. Example: `tf-ds-tab-body-a="tab-a-1-1"`.
    -   For each container, only one body should have an attribute specifying that it should be open by default. Example: `tf-ds-tab-a-active="true"`.

-   **External Links:** The external links should have:

    -   An attribute with a value equal to the ID of the body it should open. Example: `tf-ds-tab-external-open-a="tab-a-1-1"`.
    -   An attribute specifying the ID of the container that contains the body it is opening. Example: `tf-ds-container="tab-a-1"`.

-   **Selects:** The select element should have:
    -   An ID attribute. Example: `id="select-01"`.
    -   A class to identify it. Example: `class="js--select-item-a"`.
    -   An attribute with a value equal to the ID of the container it belongs to. Example: `tf-ds-container="tab-a-1"`.
    -   The value of the options should be the ID of the body it should open. Example: `<option value="tab-a-1-1">...</option>`. -->

#### HTML

```sh
<div class="c--accordion-a js--accordion-a" id="accordion-3" tf-ds-acc-body="accordion-3">
  <div class="c--accordion-a__hd" tf-ds-acc-target="accordion-3">
      <p class="c--accordion-a__hd__title">Accordion 3</p>
  </div>
  <div class="c--accordion-a__bd">
      <div class="c--accordion-a__bd__content b--content-a">
          <p>Accordion content 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, corrupti! Beatae ratione quas ab, tenetur id ut, debitis error repudiandae sint minima voluptatibus, dolorem expedita molestias. Quam assumenda odit sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum, commodi, quisquam cum perspiciatis similique facilis blanditiis debitis dicta ullam, temporibus a nulla laboriosam dignissimos veniam sequi molestiae voluptates veritatis.</p>
      </div>
  </div>
</div>
```

#### CSS Styles

```sh
.c--accordion-a {
    border: 1px solid #3ca8b0;
}

.c--accordion-a__hd {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    background-color: rgba(120, 242, 197, 0.4);
    cursor: pointer;
}

.c--accordion-a__hd__title {
    font-family: Jost, sans-serif;
    font-weight: 300;
    line-height: 1.35;
    letter-spacing: 0.26px;
    font-size: 1rem;
    color: #3ca8b0;
    text-decoration: none !important;
    margin-bottom: 0px;
}

.c--accordion-a__bd {
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height 0.6s cubic-bezier(0, 1, 0, 1);
    transition: max-height 0.6s cubic-bezier(0, 1, 0, 1);
}

.c--accordion-a__bd__content {
    padding: 0.5rem;
}

.c--accordion-a--is-active .c--accordion-a__hd {
    border-bottom: 1px solid #3ca8b0;
}

.c--accordion-a--is-active .c--accordion-a__hd__artwork--first {
    display: none;
}

.c--accordion-a--is-active .c--accordion-a__hd__artwork--second {
    display: block;
}

.c--accordion-a--is-active .c--accordion-a__bd {
    max-height: 99em;
    -webkit-transition: max-height 0.9s ease-in-out;
    transition: max-height 0.9s ease-in-out;
}
```

<!-- ## Customization

You can customize the CSS classes and data attributes used by the tabs package to match your project's styles and structure. Modify the class names and data attributes in both the JavaScript and HTML sections accordingly. -->

<!-- ## Options

• `tabContainer:` Specifies the ID selector for the main container of the tabs.

• `tabActive:` Specifies the active tab.

• `tabActiveClass:` Specifies the CSS class for the active tab content. If this attribute is not provided in the HTML, the tab content bodies will be initially hidden, and clicking on a tab will activate the corresponding content.

• `tabBodyActiveClass:` Specifies the CSS class for the active tab link.

• `tabTrigger:` Specifies the attribute value to identify which tab to open.

• `tabParent:` Specifies the attribute value to identify the tab link.

• `tabBody:` Specifies the attribute value to identify the tab content element.

• `externalTrigger:` Specifies the attribute value for an external trigger to open the tab.

• `selectClass:` Specifies the CSS class for a select item.

• `onChange():` Specifies a callback function to be executed when the tab changes.

• `mediaQuerySelect:` Specifies the breakpoint at which to activate mobile selection behavior. When the window width is less than the specified value, the tabs are replaced with a select element for better mobile user experience -->

## Destroy

Destroys the `Accordion` instance by removing event listeners and resetting the state. This method should be called when you want to completely remove the accordion functionality from the page.

```sh
const accordion = new Accordion(options);
accordion.destroy();
```

<!-- ## More than one group of tabs

If you have two or more groups of tabs, you can instantiate the JS class in the following way:

```sh
import Tabs from "@teamthunderfoot/tabs";
import { breakpoints } from "@teamthunderfoot/breakpoints";

class Page {
  constructor() {
    this.tabsA = null;
    this.tabsB = null;

    this.init();
    this.events();
  }

  init() {
    const bk = breakpoints.reduce(
      (target, inner) => Object.assign(target, inner),
      {}
    );

    document.querySelectorAll(".js--tabs-a").forEach((el) => {
      this.tabsA = new Tabs({
        tabContainer: "tf-ds-container",
        tabActive: "tf-ds-tab-a-active",
        tabActiveClass: "b--tabs-a__bd__item--is-active",
        tabBodyActiveClass: "b--tabs-a__hd__list-item__link--is-active",
        tabTrigger: "tf-ds-tab-to-open-a",
        tabParent: "tf-ds-tab-parent",
        tabBody: "tf-ds-tab-body-a",
        externalTrigger: "tf-ds-tab-external-open-a",
        selectClass: "js--select-item-a",
        mediaQuerySelect: bk.tablets, // 810
        onChange: () => {
          // do something
        },
      });
    });

    document
      .querySelector(".js--tabs-destroy")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.destroyTabs();
      });
  }

  events() {
  }

  destroyTabs() {
    if (this.tabsA) {
      this.tabsA.destroy();
      this.tabsA = null;
    }

    if (this.tabsB) {
      this.tabsB.destroy();
      this.tabsB = null;
    }
  }
}

export default Page;

new Page();

``` -->
