

function Text(){
    return (
        <div className=" text-primary text-xs md:text-2xl">
            <div className="flex">
                <h6 className="mr-2">I am </h6>
                <h4><b> Ephraim John</b></h4>
            </div>
            <p className=" text-left">
            I’m a dedicated tech enthusiast with a strong
            foundation in computer programming, embedded
            systems, mobile development, and machine learning.
            Eager to learn and determined to leverage these skills
            to drive success for the team.
            </p>
            <h5 className="mt-6 font-bold">
                SKILLS:
            </h5>
        </div>
    )
}

function SplashPhoto(){
    return (
        <div className="flex justify-end md:mr-10">
                <img  className="absolute w-60  md:w-2/3  z-106" src="/pp.png" alt="ephra img " />   
        </div>
    )
}

function HelloWorld(){
    return (
        <h1 className="text-4xl pr-10 left-1 pt-48 md:pt-80 text-primary font-bold md:text-6xl">
               Hello, World! 
           </h1>
           )
}

function ShortDescription(){
    return (
        <div className="relative z-0 p-3">
            <SplashPhoto></SplashPhoto>
            <HelloWorld></HelloWorld>
            <Text></Text>
        </div>
        )
}

export default ShortDescription