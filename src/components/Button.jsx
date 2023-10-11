const Button = ({ image, text, price, button }) => {
    console.log(text)
    return (
        <>
            <div className={` md:pl-[20px] w-[350px] pl-[40px] pt-[30px]`}>
                {image}
                <div className={`grid text-[#f68b1e] text-[20px] font-semibold justify-center pt-[10px]`}>
                    {text}</div>
                <div className="flex justify-between pt-[10px]"> <div className="pt-[10px]">{price}</div>
                    <div className={` p-[10px] bg-[#9375F4] rounded-md font-normal text-[#FFFFFF] flex justify-center text-lg w-[50%] mb-[30px]`}> {button}</div></div>

            </div>
        </>
    )
}
export default Button;