import {useEffect} from "react";


const Hubspot = () => {
    useEffect(() => {
            const script = document.createElement('script');
            script.src = "//js-eu1.hsforms.net/forms/shell.js";
            document.body.appendChild(script);

            script.addEventListener('load', () => {
                if (window.hbspt) {
                    window.hbspt.forms.create({
                            region: "eu1",
                            portalId: "25437971",
                            formId: "03f76453-a6a0-44af-a0a4-c132606a4c38",
                            target: '#hub',
                            onFormReady: () => {
                                const elements = document.getElementsByClassName('hbspt-form');
                                while (elements.length > 0) {
                                    elements[0].parentNode.removeChild(elements[0]);
                                }
                            }
                        }
                    )
                }
            })
        }
    )

    return (
        <div className={'font-poppins-default'}>
            <p className={'text-lg font-poppins'}>Vielen Dank für dein Interesse!</p>
            <p className={'mt-4'}>Leider sind wir noch nicht gelauncht. Trag dich ein und bleib auf dem Laufenden. </p>
            <p>Wir melden uns bei dir, sobald es etwas Neues gibt.</p>
            <div className={'mt-6'} id={'hub'}/>
        </div>
    )
}
export default Hubspot
