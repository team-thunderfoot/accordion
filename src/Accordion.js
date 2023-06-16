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

                // Hides all active classes
                this.toggleAcc(trigger)
            })
        })
    }

    setDefaultActiveAcc() {
        const acc = document.getElementById(this.accActive)
        this.JSUTIL.addClass(acc, this.accActiveClass)
    }

    toggleAcc(trigger) {
        // Hides all active classes
        // apply class to trigger
        var accordionID = trigger.getAttribute(`${this.accTrigger}`)
        var accBody = document.getElementById(accordionID)

        if (this.accClose === true) {
            if (accBody.classList.contains(this.accActiveClass)) {
                this.JSUTIL.toggleClass(accBody, this.accActiveClass)
                if (!this.accAllOpen) this.hideAllAccsExceptActual(accordionID)
            } else if (!this.accAllOpen) {
                this.hideAccordion()
                this.JSUTIL.toggleClass(accBody, this.accActiveClass)
            }
        } else {
            this.hideAccordion()
            //apply class to element
            this.JSUTIL.toggleClass(accBody, this.accActiveClass)
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
        //removes class element
        const accBodies = document.querySelectorAll(`[${this.accBody}]`)
        accBodies.forEach((accBody) => {
            this.JSUTIL.removeClass(accBody, this.accActiveClass)
        })
    }

    hideAllAccsExceptActual(targetID) {
        //removes class element except actual
        const accBodies = document.querySelectorAll(`[${this.accBody}]`)
        accBodies.forEach((accBody) => {
            if (accBody.getAttribute(`${this.accBody}`) != targetID) {
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
