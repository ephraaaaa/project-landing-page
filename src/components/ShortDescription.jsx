

function Text(){
    return (
        <div className=" text-primary text-xs md:text-2xl">
            <div className="flex">
                <h6 className="mr-2 lg:text-5xl">I am </h6>
                <h4 className="lg:text-5xl"><b> Ephraim John</b></h4>
            </div>
            <p className="text-left lg:text-4xl lg:pr-36">
            I’m a dedicated tech enthusiast with a strong
            foundation in computer programming, embedded
            systems, mobile development, and machine learning.
            Eager to learn and determined to leverage these skills
            to drive success for the team.
            </p>
            <h5 className="mt-6 lg:mt-16 font-bold lg:text-4xl">
                SKILLS:
            </h5>
        </div>
    )
}

function SplashPhoto(){
    return (
        <div className="flex justify-end">
                <img  className="absolute w-60  md:w-2/3 lg:w-2/6  z-106 drop-shadow-2xl" src="/pp.png" alt="ephra img " />   
        </div>
    )
}

function HelloWorld(){
    return (
        <h1 className="text-4xl pr-10 left-1 pt-48 md:pt-80 lg:pt-96 text-primary font-bold md:text-6xl lg:text-9xl">
               Hello, World! 
           </h1>
           )    
}

function ShortDescription(){
    return (
        <div className="relative z-0 p-3 lg:pl-16">
            <SplashPhoto></SplashPhoto>
            <HelloWorld></HelloWorld>
            <Text></Text>
        </div>
        )
}

export default ShortDescription