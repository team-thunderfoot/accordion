import Accordion from "./Accordion"
class Page {
    constructor() {
        this.accordionA = null
        this.accordionB = null
        this.init()
        this.events()
    }
    init() {
        document.querySelectorAll(".js--accordion-a").forEach((el) => {
            this.accordionA = new Accordion({
                accActive: "",
                accActiveClass: "c--accordion-a--is-active",
                accBodyClass: "c--accordion-a__bd",
                accClose: false,
                accAllOpen: false,
                accTrigger: "tf-ds-acc-target",
                accBody: "tf-ds-acc-body",
                onChange: () => {
                    //do something
                },
            })
        })

        document.querySelectorAll(".js--accordion-b").forEach((el) => {
            this.accordionB = new Accordion({
                accActive: "accordion-5",
                accActiveClass: "c--accordion-b--is-active",
                accBodyClass: "c--accordion-b__bd",
                accClose: true,
                accAllOpen: true,
                accTrigger: "tf-ds-acc-target",
                accBody: "tf-ds-acc-body",
                onChange: () => {
                    //do something
                },
            })
        })

        // setTimeout(() => {
        //     this.accordionA.openAccordion("accordion-2")
        // }, 1500)

        document.querySelector(".js--accordion-destroy").addEventListener("click", (e) => {
            e.preventDefault()
            this.destroyAccordion()
        })
    }

    events() {
        // Otros eventos de la página...
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
export default Page

new Page()
