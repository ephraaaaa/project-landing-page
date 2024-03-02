
function SoftwareDevelopmentCategory(){
    return(
        <div className="mb-3 flex flex-col justify-center">
            <SkillPlatform width="w-52" text="Software Development" ></SkillPlatform>
            <div className="flex">
                    <SkillItems width="w-16" text="Flutter" ></SkillItems>
                    <SkillItems width="w-16" text="ReactJS" ></SkillItems>
                    <SkillItems width="w-16" text="Flask" ></SkillItems>                   
            </div>
            <div className="flex justify-center">
                    <SkillItems width="w-16" text="MongoDB" ></SkillItems>
                    <SkillItems width="w-12" text="SQL" ></SkillItems>
                    <SkillItems width="w-16" text="Firebase" ></SkillItems>                   
            </div>
            <div className="flex justify-center">
                    <SkillItems width="w-16" text="NodeJS" ></SkillItems>
                    <SkillItems width="w-38" text="HTML & Tailwind CSS" ></SkillItems>  
            </div>
        </div>

    )
}

function EmbeddedSystemsCategory(){
    return (
        <div className="mb-3 flex flex-col justify-center">
            <SkillPlatform width="w-52" text="Embedded Systems" ></SkillPlatform>
            <div className="flex">
                    <SkillItems width="w-28" text="Raspberry Pi" ></SkillItems>
                    <SkillItems width="w-16" text="ESP32" ></SkillItems>             
            </div>
            <div className="flex justify-center">
                    <SkillItems width="w-16" text="STM32" ></SkillItems>
                    <SkillItems width="w-28" text="Google Coral" ></SkillItems>             
            </div>
            <div className="flex justify-center">
                    <SkillItems width="w-16" text="Arduino" ></SkillItems>
                    <SkillItems width="w-20" text="NodeMCU" ></SkillItems>             
            </div>
        </div>
    )
}

function MachineLearningCategory(){
    return (
        <div className="mb-3">
            <SkillPlatform width="w-40 ml-10" text="Machine Learning" ></SkillPlatform>
            <div className="flex justify-center">
                    <SkillItems width="w-28" text="TensorFlow" ></SkillItems>
                    <SkillItems width="w-20" text="Python" ></SkillItems>     
            </div>
            <div className="flex ml-10">
                    <SkillItems width="w-16" text="CNN" ></SkillItems>
                    <SkillItems width="w-24" text="Sci-kit Learn" ></SkillItems>     
            </div>
            <div className="flex justify-center">
                    <SkillItems width="w-16" text="Numpy" ></SkillItems>
                    <SkillItems width="w-24" text="Matplotlib" ></SkillItems>     
            </div>
            <div className="flex justify-center ml-1">
                    <SkillItems width="w-32" text="Colaboratory" ></SkillItems>
                    <SkillItems width="w-24" text="Librosa" ></SkillItems>     
            </div>
        </div>
    )
}







function SkillPlatform(props){
    const {width} = props
    return (
        <div className={`border border-primary rounded-xl h-7 ${width} mb-2`}>
            <div className={`text-primary text-center text-sm p-1 font-semibold`} >
                {props.text}
            </div>
        </div>
   
        
    )
}
function SkillItems(props){

    return (
        <div className={`bg-primary h-6 text-xs ${props.width} rounded-full text-center text-white p-1 m-1 hover:bg-white hover:text-primary `}>
            {props.text}
        </div>
    )
}

function Skills(){
    return (
        <div className="flex flex-col items-center mt-2">            
            <SoftwareDevelopmentCategory></SoftwareDevelopmentCategory>
            <EmbeddedSystemsCategory></EmbeddedSystemsCategory>
            <MachineLearningCategory></MachineLearningCategory>

        </div>
    )
}

export default Skills

/*
            <SkillPlatform width="w-48" text="Embedded Systems" ></SkillPlatform>
            <SkillPlatform width="w-48" text="Machine Learning" ></SkillPlatform>
*/