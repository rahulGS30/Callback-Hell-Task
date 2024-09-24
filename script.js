// function compute(a,b,cb){
//     console.log("compute started");
//     setTimeout(()=>{
//         cb(a+b,5);
//     },10000)
//     console.log("compute ended");
// }

// function make(ans=0,check=0){
//     if(ans>check){
//         console.log(`greater than ${check}`)
//     }
//     else{
//         console.log(`lesser than ${check}`)
//     }
// }
// compute(2,3,make);

const display = document.querySelector(".display");

const timer = () => {
    display.textContent = "10";
    setTimeout(() => {
        display.textContent = "";
        setTimeout(() => {
            display.textContent = "9";
            setTimeout(() => {
                display.textContent = "";
                setTimeout(() => {
                    display.textContent = "8";
                    setTimeout(() => {
                        display.textContent = "";
                        setTimeout(() => {
                            display.textContent = "7";
                            setTimeout(() => {
                                display.textContent = "";
                                setTimeout(() => {
                                    display.textContent = "6";
                                    setTimeout(() => {
                                        display.textContent = "";
                                        setTimeout(() => {
                                            display.textContent = "5";
                                            setTimeout(() => {
                                                display.textContent = "";
                                                setTimeout(() => {
                                                    display.textContent = "4";
                                                    setTimeout(() => {
                                                        display.textContent = "";
                                                        setTimeout(() => {
                                                            display.textContent = "3";
                                                            setTimeout(() => {
                                                                display.textContent = "";
                                                                setTimeout(() => {
                                                                    display.textContent = "2";
                                                                    setTimeout(() => {
                                                                        display.textContent = "";
                                                                        setTimeout(() => {
                                                                            display.textContent = "1";
                                                                            setTimeout(() => {
                                                                                display.textContent = "";
                                                                                setTimeout(() => {
                                                                                    display.textContent = "0";
                                                                                    setTimeout(() => {
                                                                                        display.textContent = "Happy Independence Day!";
                                                                                    }, 1000);
                                                                                }, 1000);
                                                                            }, 1000);
                                                                        }, 1000);
                                                                    }, 1000);
                                                                }, 1000);
                                                            }, 1000);
                                                        }, 1000);
                                                    }, 1000);
                                                }, 1000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};

timer();
