import React from 'react';
import myPDF from './public/menu.pdf'
import PDF from 'react-pdf-js';

class MyPdfViewer extends React.Component {
  state = {};
  
  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  onPageComplete = (page) => {
    this.setState({ page });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a className="prev-button" href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    if (page === 1) {
      previousButton = <li className="previous-disabled"><a className="prev-button" href="#"><i className="fa fa-arrow-left"></i> Previous</a></li>;
    }
    let nextButton = <li className="next-but" onClick={this.handleNext}><a className="next-button" href="#"> Next<i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next-disabled"><a className="next-button" href="#">Next <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <nav>
        <ul className="pager">
          {previousButton}
          {nextButton}
        </ul>
      </nav>
      );
  }

  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <div>
        <PDF file={myPDF} onDocumentComplete={this.onDocumentComplete} onPageComplete={this.onPageComplete} page={this.state.page} className="pdf-test"/>
        {pagination}
      </div>
    )
  }
}

export default MyPdfViewer;