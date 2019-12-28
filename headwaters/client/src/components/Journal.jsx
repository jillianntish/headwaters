import React from 'react';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <div className="form-container">
          <h1>
            Journal <span className="text-primary"></span>
          </h1>
          <form>
            <div>
              <textarea rows="10" cols="50">
                Today's journal entry...
            </textarea>
            </div>
            <div>
              <label htmlFor="feelings">How are you feeling today?</label>
              <select>
                <option value="happiness">happiness</option>
                <option value="anger">anger</option>
                <option value="sadness">sadness</option>
                <option value="love">love</option>
                <option value="fear">fear</option>
                <option value="depression">depression</option>
                <option value="disgust">disgust</option>
                <option value="surprise">surprise</option>
                <option value="neutral">neutral</option>
                <option value="anxiety">anxiety</option>
                <option value="contempt">contempt</option>
                <option value="pride">pride</option>
                <option value="shame">shame</option>
                <option value="envy">envy</option>
              </select>
              <div>
                <label htmlFor="water">How much water did you drink today?</label>
                <input type="water" name="water" />
              </div>
              <div>
                <label htmlFor="sleep">How much sleep did you get?</label>
                <input type="sleep" name="sleep" />
              </div>
              <div>
                <label htmlFor="sleep">How much exercise did you get?</label>
                <input type="sleep" name="sleep" />
              </div>
              <div>
                <textarea rows="3" cols="50">
                  What did you eat?
            </textarea>
              </div>
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}


export default Journal;
