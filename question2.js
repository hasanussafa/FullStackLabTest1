//Name: Kazi Hasanus Safa, StudentID: 101275458
//question 2
// creating resolvedPromise method
const resolvedPromise = () => {
    return new Promise((resolvedPara, rejectedPara) => {
        setTimeout(() => {
            resolvedPara({'message':'resolved promise output after 500ms.'}); //success message after 500ms
        }, 500);
    });
}

// creating rejectedPromise method
const rejectedPromise = () => {
    return new Promise((resolvedPara, rejectedPara) => {
        setTimeout(() => {
            rejectedPara({'error': 'rejected promise output after 500ms.'}); // error message after 500ms
        }, 500);
    });
}
resolvedPromise().then(res => console.log(res))// calling resolvedPromise method
rejectedPromise().catch(err => console.log(err)) // calling rejectedPromise method
