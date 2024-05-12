import './InstructionCooking.css';

function InstructionCooking({instructions}) {



    return (
      <div className="instructions_cooking">
          <h2 className="instructions_cooking__header block__padding_horizontal_big">Инструкции по приготовлению</h2>
          <div className="instructions_cooking__points block__padding_horizontal_big
                block__padding_vertical_big">

              <div>
                  {
                      instructions !== undefined && instructions.map((instruction, id) =>
                          <div key={id} className="instruction__point">
                              {instruction}
                          </div>)
                  }
              </div>

          </div>

      </div>
    );

}

export default InstructionCooking;