import Accordion from "./Accordion"
class Page {
    constructor() {
        this.accordionA = null
        this.accordionB = null
        this.init()
        this.events()
    }
    init() {
        // document.querySelectorAll(".js--accordion-a").forEach((el) => {
        //     const accordionInstance = new Accordion({
        //         accActive: "tf-ds-acc-active",
        //         accActiveClass: "c--accordion-a--is-active",
        //         accBodyClass: "c--accordion-a__bd",
        //         accClose: true,
        //         accAllOpen: false,
        //         accTrigger: "tf-ds-acc-target",
        //         accBody: "tf-ds-acc-body",
        //         onChange: () => {
        //             //do something
        //         },
        //     })

        //     this.accordionA.push(accordionInstance)
        // })

        this.accordionA = new Accordion({
            accActive: "tf-ds-acc-active-a",
            accActiveClass: "c--accordion-a--is-active",
            accBodyClass: "c--accordion-a__bd",
            accClose: true,
            accAllOpen: false,
            accTrigger: "tf-ds-acc-target-a",
            accBody: "tf-ds-acc-body-a",
            onChange: () => {
                //do something
            },
        })

        this.accordionB = new Accordion({
            accActive: "tf-ds-acc-active-b",
            accActiveClass: "c--accordion-b--is-active",
            accBodyClass: "c--accordion-b__bd",
            accClose: false,
            accAllOpen: false,
            accTrigger: "tf-ds-acc-target-b",
            accBody: "tf-ds-acc-body-b",
            onChange: () => {
                //do something
            },
        })

        // document.querySelectorAll(".js--accordion-b").forEach((el) => {
        //     const accordionInstance = new Accordion({
        //         accActive: "tf-ds-acc-active",
        //         accActiveClass: "c--accordion-b--is-active",
        //         accBodyClass: "c--accordion-b__bd",
        //         accClose: false,
        //         accAllOpen: false,
        //         accTrigger: "tf-ds-acc-target",
        //         accBody: "tf-ds-acc-body",
        //         onChange: () => {
        //             //do something
        //         },
        //     })

        //     this.accordionB.push(accordionInstance)
        // })

        setTimeout(() => {
            this.accordionA.openAccordion("accordion-2")
        }, 1500)

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
