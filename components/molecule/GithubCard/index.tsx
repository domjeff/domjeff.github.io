
import styles from './styles.module.scss'


const GithubCard = ({ latestRepo }:any) => {
    return (
        // <div className="github-repo">
        <div 
        className="github-repo"
        >
        <h1 
            // className={styles.githubRepoName}
            className="font-semibold text-xl dark:text-gray-100 text-gray-700"
        >
            {latestRepo.name}
        </h1>
        <p 
        // className={styles.githubRepoDescription}
            className="text-base font-normal my-4 text-gray-500 dark:text-gray-400 truncate"
        >
            {
                latestRepo.description || <br/>
            }
        </p>
        <a
            href={latestRepo.clone_url}
            className="font-semibold group flex flex-row space-x-2 w-full items-center"
        >
            <p>View Repository </p>
            <div className="transform  group-hover:translate-x-2 transition duration-300">
            &rarr;
            </div>
        </a>
        </div>
    );
};

export default GithubCard