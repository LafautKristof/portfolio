import Connect from "./Connect";
import Eager from "./Eager";
import MyResume from "./MyResume";
import TagLine from "./TagLine";

const HomeList = () => {
    return (
        <>
            <div className="flex justify-center mt-6">
                <Eager />
            </div>
            <div className="flex justify-center mt-6">
                <TagLine />
            </div>
            <div className="flex justify-center gap-3 mt-6">
                <Connect />
                <MyResume />
            </div>
        </>
    );
};
export default HomeList;
