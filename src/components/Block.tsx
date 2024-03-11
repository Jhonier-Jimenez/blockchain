
import BlockProps from "../ts/interfaces/blockProps";


const Block:React.FC<BlockProps> = ({blockNumber, prevHash}) => {



    return(
        <>
        <div>{blockNumber}</div>
        <div>{prevHash}</div>
        
        
        </>
    )
};

export default Block;
