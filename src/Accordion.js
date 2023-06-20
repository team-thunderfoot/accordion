import JSUTIL from "@andresclua/jsutil"

class Accordion {
    constructor(payload) {
        this.accContainer = payload.accContainer
        this.accActive = payload.accActive
        this.accActiveClass = payload.accActiveClass
        this.accBodyClass = payload.accBodyClass
        this.accClose = payload.accClose
        this.accAllOpen = payload.accAllOpen
        this.accTrigger = payload.accTrigger
        this.accExternalTrigger = payload.accExternalTrigger
        this.accBody = payload.accBody
        this.onChange = payload.onChange

        this.JSUTIL = new JSUTIL()
        this.init()
        this.events()
    }

    init() {
        // Set the default active accordion
        this.setDefaultActiveAcc()
    }

    events() {
        // Assign events to accordion trigger elements within the specified container
        const triggers = this.accContainer.querySelectorAll(`[${this.accTrigger}]`)
        triggers.forEach((trigger) => {
            const accordionID = trigger.getAttribute(this.accTrigger)

            // Add a click event listener to each accordion trigger
            trigger.addEventListener("click", (e) => {
                e.preventDefault()
                this.toggleAcc(accordionID)
            })
        })

        // Assign events to accordion external trigger elements within the specified container
        const externalTriggers = document.querySelectorAll(`[${this.accExternalTrigger}]`)
        externalTriggers.forEach((externalTrigger) => {
            const accordionID = externalTrigger.getAttribute(this.accExternalTrigger)

            externalTrigger.addEventListener("click", (e) => {
                e.preventDefault()
                this.toggleAcc(accordionID)
            })
        })
    }

    setDefaultActiveAcc() {
        const accordions = this.accContainer.querySelectorAll(`[${this.accActive}]`)
        accordions.forEach((accordion) => {
            this.JSUTIL.addClass(accordion, this.accActiveClass)
        })
    }

    toggleAcc(accordionID) {
        // Get the accordion element based on its ID
        const accordion = this.accContainer.querySelector(`#${accordionID}`)

        // Check if the accordion exists and make changes to its state
        if (accordion) {
            const isActive = accordion.classList.contains(this.accActiveClass)

            if (this.accClose) {
                isActive ? this.JSUTIL.removeClass(accordion, this.accActiveClass) : this.JSUTIL.addClass(accordion, this.accActiveClass)
            } else if (!isActive) {
                this.JSUTIL.addClass(accordion, this.accActiveClass)
            }

            if (!this.accAllOpen) {
                this.hideAllAccsExceptActual(accordionID)
            }
        }

        if (this.onChange) this.onChange()
    }

    openAccordion(accordionID) {
        this.hideAccordion()
        const accordion = document.getElementById(accordionID)
        this.JSUTIL.addClass(accordion, this.accActiveClass)

        if (this.onChange) this.onChange()
    }

    hideAccordion() {
        const accBodies = document.querySelectorAll(`[${this.accBody}]`)
        accBodies.forEach((accBody) => {
            this.JSUTIL.removeClass(accBody, this.accActiveClass)
        })
    }

    hideAllAccsExceptActual(accordionID) {
        const accBodies = this.accContainer.querySelectorAll(`[${this.accBody}]`)
        accBodies.forEach((accBody) => {
            if (accBody.getAttribute(`${this.accBody}`) !== accordionID) {
                this.JSUTIL.removeClass(accBody, this.accActiveClass)
            }
        })
    }

    // Clears the click event and removes all added classes
    destroy() {
        const triggers = document.querySelectorAll(`[${this.accTrigger}]`)
        triggers.forEach((trigger) => {
            trigger.className = ""

            let elClone = trigger.cloneNode(true)
            trigger.parentNode.replaceChild(elClone, trigger)
        })

        const bodies = document.querySelectorAll(`.${this.accBodyClass}`)
        bodies.forEach((body) => {
            body.className = ""
        })
    }
}

export default Accordion
