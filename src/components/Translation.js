

function translation() {

    function handleTranslation() {
        const translation = document.getElementById("transInput").value.toLowerCase()

        let arr = Array.from(translation)

        let imgArray = []
        arr.forEach(element => {
            if (element === " ") {
                imgArray.push(" ")
            } else {
                imgArray.push(element + ".png")
            }
        });

        console.log(imgArray)
    }

    return (
        < div >
            <div>
                <input id="transInput" placeholder="Input your translation" required />
                <input type="submit" value="Translate" onClick={handleTranslation} />
            </div>
        </div >
    )
}

export default translation