/*! [PROJECT_NAME] | Suitmedia */

((window, document, undefined) => {

    const active = 'is-active'

    const path = {
        css: `${myPrefix}assets/css/`,
        js : `${myPrefix}assets/js/vendor/`
    }

    const assets = {
        _objectFit      : `${path.js}object-fit-images.min.js`
    }

    const Site = {
        enableActiveStateMobile() {
            if ( document.addEventListener ) {
                document.addEventListener('touchstart', () => {}, true)
            }
        },

        WPViewportFix() {
            if ( '-ms-user-select' in document.documentElement.style && navigator.userAgent.match(/IEMobile/) ) {
                let style = document.createElement('style')
                let fix = document.createTextNode('@-ms-viewport{width:auto!important}')

                style.appendChild(fix)
                document.head.appendChild(style)
            }
        },

        objectFitPolyfill() {
            load(assets._objectFit).then( () => {
                objectFitImages()
            })
        },

        mainSection() {
            let scrolled = window.pageYOffset
            let secondSection = $('.second-section').offset().top
            let $secondImg = $('.second-section-img')
            let $mainSection = $('.main-section')
            
            $(window).on('scroll', e => {
                scrolled = window.pageYOffset
                if ( scrolled >= secondSection - 70 ) { 
                    $secondImg.addClass(active)
                }
                if ( scrolled <= 0 && !$mainSection.hasClass(active)) {
                    $mainSection.addClass(active)
                }
                else if ( scrolled > 0 && $mainSection.hasClass(active)) {
                    $mainSection.removeClass(active)
                }
            })

            //console.log(secondImgTop)
        },

        projectSlider() {
            let $slider = $('.project-slider')

            $slider.slick({
                slidesToShow: 3,
                arrows: false
            })
        }
    }

    Promise.all([
        
    ]).then(() => {
        for (let fn in Site) {
            Site[fn]()
        }
        window.Site = Site
    })

    function exist(selector) {
        return new Promise((resolve, reject) => {
            let $elem = $(selector)

            if ( $elem.length ) {
                resolve($elem)
            } else {
                reject(`no element found for ${selector}`)
            }
        })
    }

    function load(url) {
        return new Promise((resolve, reject) => {
            Modernizr.load({
                load: url,
                complete: resolve
            })
        })
    }

    function loadJSON(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => {
                if ( res.ok ) {
                    resolve(res.json())
                } else {
                    reject('Network response not ok')
                }
            }).catch(e => {
                reject(e)
            })
        })
    }

})(window, document)
