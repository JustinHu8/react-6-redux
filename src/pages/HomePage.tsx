import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import CoursePillList from '../components/CoursePillList/CoursePillList.tsx';
import Counter from "../components/Counter/Counter.tsx";

const HomePage = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    
    return (
        <div>
            <h1>Home</h1>
            {isAuthenticated && <Counter />}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio pariatur ab quisquam cupiditate obcaecati odit impedit error! Laborum ipsum itaque repellendus quo asperiores quaerat in culpa autem doloribus reprehenderit!</p>
            <WelcomeMessage />
            <CoursePillList />
        </div>
    );
};
export default HomePage;