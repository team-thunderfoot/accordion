# Accordion

The accordion package provides accordion interface functionality that allows you to interactively show and hide content sections. It makes it easy to create custom accordion elements and offers a seamless user experience.

[Here's an example](https://team-thunderfoot.github.io/accordion/dist/index.html)

## Installation

```sh
npm install @teamthunderfoot/accordion
```

## Usage

```sh
import Accordion from "@teamthunderfoot/accordion";

class Page {
  constructor() {
    this.init();
    this.events();
  }

  init() {

    const accordion = new Accordion({
        accContainer: accContainer,
        accActive: "tf-ds-acc-active-a",
        accActiveClass: "c--accordion-a--is-active",
        accBodyClass: "c--accordion-a__bd",
        accClose: false,
        accAllOpen: false,
        accTrigger: "tf-ds-acc-target-a",
        accExternalTrigger: "tf-ds-acc-external-target-a",
        accBody: "tf-ds-acc-body-a",
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

In your HTML file, add the necessary elements for the accordion. Each accordion item should have a specific structure that includes a header and hidden content.

-   **Accordion container:** The accordion container element should have a class. Example: `class="js--accordion-a"`.

-   **Accordion item:** The accordion item should have:

    -   An ID attribute. Example: `id="accordion-1"`.
    -   An attribute with a value equal to the same ID as the body. Example: `tf-ds-acc-body-a="accordion-1"`.
    -   An attribute specifying that it should be open by default. Example: `tf-ds-acc-active-a="true"`.

-   **Triggers:** The accordion triggers should have:

    -   An attribute with a value equal to the ID of the accordion body it should open. Example: `tf-ds-acc-target-a="accordion-1"`.

-   **External Triggers:** The external triggers should have:

    -   An attribute with a value equal to the ID of the body it should open. Example: `tf-ds-acc-external-target-a="accordion-3"`.

#### HTML

```sh
 <div class="js--container-a">
  <div class="c--accordion-a" id="accordion-1" tf-ds-acc-body-a="accordion-1">
      <button class="c--accordion-a__hd" tf-ds-acc-target-a="accordion-1">
        <p class="c--accordion-a__hd__title">Accordion 1</p>
      </button>
      <div class="c--accordion-a__bd">
        <div class="c--accordion-a__bd__content c--content-a">
          <p>Accordion content 1 <a href="#" tf-ds-acc-target-a="accordion-2">open 2</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, corrupti! Beatae ratione quas ab, tenetur id ut, debitis error repudiandae sint minima voluptatibus, dolorem expedita molestias. Quam assumenda odit sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum, commodi, quisquam cum perspiciatis similique facilis blanditiis debitis dicta ullam, temporibus a nulla laboriosam dignissimos veniam sequi molestiae voluptates veritatis.</p>
        </div>
      </div>
  </div>
</div>
```

#### CSS Styles

```sh

.c--accordion-a {
    border: 1px solid #48773e;
}

.c--accordion-a__hd {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    background-color: rgba(72, 119, 62, 0.8);
    border: none;
    text-align: left;
}

.c--accordion-a__hd__title {
    font-family: Jost, sans-serif;
    font-weight: 300;
    line-height: 1.35;
    letter-spacing: 0.26px;
    font-size: 1rem;
    color: #fff;
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
    border-bottom: 1px solid #48773e;
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

## Customization

You can customize the CSS classes and data attributes used by the accordion package to match your project's styles and structure. Modify the class names and data attributes in both the JavaScript and HTML sections accordingly.

## Options

• `accContainer:` Specifies the class of the accordion container.

• `accActive:` Specifies the ID of the active accordion.

• `accActiveClass:` Specifies the CSS class for the active accordion content.

• `accBodyClass:` Specifies the CSS class for the accordion body.

• `accClose:` Specifies whether the accordion should close when the active accordion is clicked again.

• `accAllOpen:` Specifies whether all accordions can be open simultaneously.

• `accTrigger:` Specifies the attribute value used to identify which accordion to open.

• `externalTrigger:` Specifies the attribute value for an external trigger to open the accordion.

• `accBody:` Specifies the attribute value used to identify the accordion body element.

• `onChange():` Specifies a callback function to be executed when the accordion changes.

## Open an Accordion

You can use the `openAccordion()` function to programmatically open an accordion item. The function allows you to specify the ID of the accordion item you want to open. Here's an example of how you can use it:

```sh
setTimeout(() => {
    this.accordionA.openAccordion("accordion-2");
}, 1500);
```

This will open the accordion item with the ID "accordion-2" after 1.5 seconds.

## Destroy

Destroys the `Accordion` instance by removing event listeners and resetting the state. This method should be called when you want to completely remove the accordion functionality from the page.

```sh
const accordion = new Accordion(options);
accordion.destroy();
```

## More than one group of accordions

If you have two or more groups of accordions, you can instantiate the JS class in the following way:

```sh
import Accordion from "@teamthunderfoot/accordion";

class Page {
  constructor() {
    this.accordionA = null
    this.accordionB = null

    this.init();
    this.events();
  }

  init() {

    document.querySelectorAll(".js--container-a").forEach((accContainer) => {
        this.accordionA = new Accordion({
            accContainer: accContainer,
            accActive: "tf-ds-acc-active-a",
            accActiveClass: "c--accordion-a--is-active",
            accBodyClass: "c--accordion-a__bd",
            accClose: false,
            accAllOpen: false,
            accTrigger: "tf-ds-acc-target-a",
            accExternalTrigger: "tf-ds-acc-external-target-a",
            accBody: "tf-ds-acc-body-a",
            onChange: () => {
                //do something
            },
        })
    })

    document.querySelector(".js--accordion-destroy")
    .addEventListener("click", (e) => {
            e.preventDefault()
            this.destroyAccordion()
    })
  }

  events() {
  }

  destroyAccordion() {
    if (this.accordionA) {
        this.accordionA.destroy()
        this.accordionA = null
    }

    if (this.accordionB) {
        this.accordionB.destroy()
        this.accordionB = null
    }
}
}

export default Page;

new Page();

```
