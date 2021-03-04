import { useState } from 'react'

import '../assets/styles/translation.css'

import a from '../assets/individial_signs/a.png'
import b from '../assets/individial_signs/b.png'
import c from '../assets/individial_signs/c.png'
import d from '../assets/individial_signs/d.png'
import e from '../assets/individial_signs/e.png'
import f from '../assets/individial_signs/f.png'
import g from '../assets/individial_signs/g.png'
import h from '../assets/individial_signs/h.png'
import i from '../assets/individial_signs/i.png'
import j from '../assets/individial_signs/j.png'
import k from '../assets/individial_signs/k.png'
import l from '../assets/individial_signs/l.png'
import m from '../assets/individial_signs/m.png'
import n from '../assets/individial_signs/n.png'
import o from '../assets/individial_signs/o.png'
import p from '../assets/individial_signs/p.png'
import q from '../assets/individial_signs/q.png'
import r from '../assets/individial_signs/r.png'
import s from '../assets/individial_signs/s.png'
import t from '../assets/individial_signs/t.png'
import u from '../assets/individial_signs/u.png'
import v from '../assets/individial_signs/v.png'
import w from '../assets/individial_signs/w.png'
import x from '../assets/individial_signs/x.png'
import y from '../assets/individial_signs/y.png'
import z from '../assets/individial_signs/z.png'
import dash from '../assets/individial_signs/dash.png'

function Translation() {

    let images = {
        "a": a,
        "b": b,
        "c": c,
        "d": d,
        "e": e,
        "f": f,
        "g": g,
        "h": h,
        "i": i,
        "j": j,
        "k": k,
        "l": l,
        "m": m,
        "n": n,
        "o": o,
        "p": p,
        "q": q,
        "r": r,
        "s": s,
        "t": t,
        "u": u,
        "v": v,
        "w": w,
        "x": x,
        "y": y,
        "z": z,
        "-": dash
    }

    const [imageList, setImageList] = useState();

    function handleTranslation() {

        let imgArray = []
        const translation = document.getElementById("transInput").value.toLowerCase()

        let arr = Array.from(translation)

        arr.forEach(element => {
            if (element === " ") {
                imgArray.push(images["-"])
            } else {
                imgArray.push(images[element])
            }
        });

        setImageList(imgArray)
    }

    return (
        <div>
            <div>
                <input id="transInput" placeholder="Input your translation" required />
                <input id="translate-btn" type="submit" value="Translate" onClick={handleTranslation} />
            </div>
            <div id="translated">
                {imageList && imageList.map((sign, index) => (
                    <img key={index} src={sign} alt="Give up" />
                ))}
            </div>
        </div>
    )
}

export default Translation