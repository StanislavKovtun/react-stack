//v1:
//export default function fenchMovie({params}) {
//    return {
//        name: 'Film name',
//        duration: 150,
//        id: params.id,
//    }
//}

//v2:
//TODO: type of params? (any)
export default function fetchMovie({params}: any) {
    return new Promise((res) => {
        setTimeout(
            () =>
                res({
                    name: 'Film name',
                    duration: 150,
                    id: params.id,
                }),
            5000
        );
    })
}