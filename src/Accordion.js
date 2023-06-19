import JSUTIL from "@andresclua/jsutil"

class Accordion {
    constructor(payload) {
        this.accActive = payload.accActive
        this.accActiveClass = payload.accActiveClass
        this.accBodyClass = payload.accBodyClass
        this.accClose = payload.accClose
        this.accAllOpen = payload.accAllOpen
        this.accTrigger = payload.accTrigger
        this.accBody = payload.accBody
        this.onChange = payload.onChange

        this.JSUTIL = new JSUTIL()
        this.init()
        this.events()
    }

    init() {
        this.setDefaultActiveAcc()
    }

    events() {
        const triggers = document.querySelectorAll(`[${this.accTrigger}]`)
        triggers.forEach((trigger) => {
            trigger.addEventListener("click", (e) => {
                e.preventDefault()
                this.toggleAcc(trigger)
            })
        })
    }

    setDefaultActiveAcc() {
        const accordions = document.querySelectorAll(`[${this.accActive}]`)
        accordions.forEach((accordion) => {
            this.JSUTIL.addClass(accordion, this.accActiveClass)
        })
    }

    toggleAcc(trigger) {
        let accordionID = trigger.getAttribute(this.accTrigger)
        let accBody = document.getElementById(accordionID)

        if (accBody) {
            const isActive = accBody.classList.contains(this.accActiveClass)

            if (this.accClose) {
                isActive ? this.JSUTIL.removeClass(accBody, this.accActiveClass) : this.JSUTIL.addClass(accBody, this.accActiveClass)
            } else if (!isActive) {
                this.JSUTIL.addClass(accBody, this.accActiveClass)
            }

            if (!this.accAllOpen) {
                this.hideAllAccsExceptActual(accordionID)
            }
        }

        if (this.onChange) this.onChange()
    }

    openAccordion(targetID) {
        this.hideAccordion()
        const accordion = document.getElementById(targetID)
        this.JSUTIL.addClass(accordion, this.accActiveClass)

        if (this.onChange) this.onChange()
    }

    hideAccordion() {
        const accBodies = document.querySelectorAll(`[${this.accBody}]`)
        accBodies.forEach((accBody) => {
            this.JSUTIL.removeClass(accBody, this.accActiveClass)
        })
    }

    hideAllAccsExceptActual(targetID) {
        const accBodies = document.querySelectorAll(`[${this.accBody}]`)
        accBodies.forEach((accBody) => {
            if (accBody.getAttribute(`${this.accBody}`) !== targetID) {
                this.JSUTIL.removeClass(accBody, this.accActiveClass)
            }
        })
    }

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
