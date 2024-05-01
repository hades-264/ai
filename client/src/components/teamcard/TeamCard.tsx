import SlideIn from "../../components/slideIn/SlideIn";

type TeamCardProps = {
    firstName: string;
    lastName: string;
    description: string;
    email: string;
};

const TeamCard = (user: TeamCardProps) => {
    return (
        <div className="border-4 border-pink-400 px-6 py-12 rounded-2xl flex flex-col items-center flex-1 shadow-2xl bg-white">
           
            <div>
                <h1 className="text-3xl font-bold my-6 flex justify-center text-pink-600">
                    <SlideIn delay={400}>
                        <span>{user.firstName}&nbsp;</span>
                        <span>{user.lastName}</span>
                    </SlideIn>
                </h1>
                <SlideIn delay={600}>
                    <div className="flex items-center justify-center gap-4">
                        <a
                            href={user.email}
                            className="p-2 rounded-full border-2 hover:border-pink-400 border-zinc-800 text-zinc-800 hover:text-pink-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                />
                            </svg>
                        </a>
                    </div>
                </SlideIn>
                <SlideIn delay={800}>
                    <p className="text-lg text-center max-w-lg mt-6">
                        {user.description}
                    </p>
                </SlideIn>
            </div>
        </div>
    );
};

export default TeamCard;
