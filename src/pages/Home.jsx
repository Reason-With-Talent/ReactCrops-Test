import Button from '../components/Button'
import Apple from "../assets/img/apple.png"
const Home = () => {
    return (
        <>
            <Button image={<img className="md:w-[300px] md:h-[400px] md:rounded-xl" src={Apple} />} text={"Apple"} price={"$500"} button={"Add To Cart"} />
        </>
    )
}
export default Home;
