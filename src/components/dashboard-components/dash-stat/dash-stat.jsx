import React from 'react';


class DashStat extends React.Component {

    componentDidMount(){
        /**
         *  Draw Progress Circle
         */
        const {progress, text,color} = this.props.data.visual;
        let progress_circle = document.getElementById("progress-circle-"+this.props.data.id);
		var options = {
			color: window.PurposeStyle.colors.theme[color],
			strokeWidth: 7,
			trailWidth: 2,
			text: { value: text ? text :progress+'%' , },
            svgStyle: { display: 'block', },
            duration: 1500,
            easing: 'easeInOut'
		};
		let progress_obj = new window.ProgressBar.Circle(progress_circle, options);
        progress_obj.animate(progress / 100);
        /**
         * End of Drawing Progress Circle
         */
    }
    render() {
        const {data} = this.props;
        return (
            <div className="col-xl-3 col-md-6">
                <div className="card card-stats">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <h6 className="text-muted mb-1">{data.title}</h6>
                                <span className="h3 font-weight-bold mb-0 ">{data.detail}</span>
                            </div>
                            <div className="col-auto">
                                <div className="progress-circle progress-sm" id={"progress-circle-"+data.id}
                                    data-progress={data.visual.progress} 
                                    data-text={data.visual.text ? data.visual.text : data.visual.progress+'%'} 
                                    data-color={data.visual.color}></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default DashStat;
