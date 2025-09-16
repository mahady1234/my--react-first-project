// 1
// export default function Food(props) {
//     return (
//         <ul>
//             <li>Eating:{props.item}</li>
//             <li>Hungry:{props.isHungry}</li>
//             <li>Need:{props.need}</li>
//         </ul>
//     )
// }

// 2
// export default function Food({ item, isHungry, need }) {

//     if (isHungry === true) {
//         return (
//             <ul >
//                 <li className='developer'>Eating:{item}</li>
//                 <li className='developer'>Need:{need}</li></ul>
//         )
//     }
//     else {
//         return (
//             <ul >
//                 <li className='developer'>Eating:{item}</li>
//                 <li className='developer'>Need:{need}</li></ul>
//         )
//     }

// }


// // 3



// export default function Food({ item, isHungry, need }) {
//     return isHungry ? <ul >
//         <li className='developer'>Eating:{item}</li>
//         <li className='developer'>Need:{need}</li></ul> :
//         <ul>
//             <li className='developer'>Eating:{item}</li>
//             <li className='developer'>Need:{need}</li></ul>

// }


// 4(and)



// export default function Food({ item, isHungry, need }) {
//     return isHungry && <ul >
//         <li className='developer'>Eating:{item}</li>
//         <li className='developer'>Need:{need}</li></ul>

// }


// 5



// export default function Food({ item, isHungry, need }) {
//     return isHungry || <ul>
//         <li className='developer'>Eating:{item}</li>
//         <li className='developer'>Need:{need}</li></ul>

// }


// 6
// export default function Food({ item, isHungry, need }) {

//     if (isHungry === true) {
//         return null;
//     }
//     else {
//         return (
//             <ul >
//                 <li className='developer'>Eating:{item}</li>
//                 <li className='developer'>Need:{need}</li></ul>
//         )
//     }

// }



// 7



// export default function Food({ item, isHungry, need, time }) {
//     const displayTime = time ? time : 100;
//     return isHungry ? (
//         <ul>
//             <li className='developer'>Eating: {item} time: {displayTime}</li>
//             <li className='developer'>Need: {need} time: {displayTime}</li>
//         </ul>
//     ) : (
//         <ul>
//             <li className='developer'>Eating: {item} time: {displayTime}</li>
//             <li className='developer'>Need: {need} time: {displayTime}</li>
//         </ul>
//     );
// }


// 8


export default function Food({ item, isHungry, need, time }) {
    // const displayTime = time ? time : 100;
    return isHungry ? (
        <ul>
            <li className='developer'>Eating: {item} time: {time ? "i am rumi" : "i am rumir bou nusrat jahan anika"}</li>
            <li className='developer'>Need: {need} time: {time ? "i am rumi" : "i am rumir bou nusrat jahan anika"}</li>
        </ul>
    ) : (
        <ul>
            <li className='developer'>Eating: {item} time: {time ? "i am rumi" : "i am rumir bou nusrat jahan anika"}</li>
            <li className='developer'>Need: {need} time: {time ? "i am rumi" : "i am rumir bou nusrat jahan anika"}</li>
        </ul>
    );
}