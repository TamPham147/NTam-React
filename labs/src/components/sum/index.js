import { useState } from "react";
function Sum() {
    const [soA,setSoA] = useState(0)

    function handleAchange(e) {
        console.log(e.target.value)
    }
    console.log(soA)
    return(
        <div>
            <input type='number' onChange={handleAchange} />
            <input type='number' />
            <button>Tinh tong</button>
        </div>
    )
}
export default Sum;