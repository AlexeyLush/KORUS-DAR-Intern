import './InformationBlock.css'

function InformationBlock({header, main, secondary, flex}) {

    return (
        <div className="information_block block__margin_bottom_small" style={{flex: flex}}>
            <h2 className="information_block__header block__padding_horizontal_big">{header}</h2>
            <div  className="information_block__info  block__padding_horizontal_big
                block__padding_vertical_big">
                {main !== undefined && <p className='information_block__main'>{main}</p>}
                {secondary !== undefined && <p className="information_block__secondary">{secondary}</p>}
            </div>

        </div>
    )

}

export default InformationBlock;