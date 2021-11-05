const App = {
    needToCapture : false,

    yak : {
        startX : 200,
        startY : 100,
        endX : 450,
        endY : 450,

        capturedPoints : [],

        bounds : [],

        pointInsideYak : function (x, y) {
            if (x < this.startX)
            {
                return false;
            }

            if (x > this.endX)
            {
                return false;
            }

            if (y < this.startY)
            {
                return false;
            }

            if (y > this.endY)
            {
                return false;
            }

            // Perhaps we shouldn't need this check
            if (y - this.startY > this.bounds.length - 1)
            {
                return false;
            }

            if (x - this.startX < this.bounds [ y - this.startY ][0])
            {
                return false;
            }

            if (x - this.startX > this.bounds [ y - this.startY ][1])
            {
                return false;
            }

            return true;
        },

        shave : function (context, x, y) {
            if (!this.pointInsideYak (x,y))
            {
                return;
            }

            let region = new Path2D()
            region.moveTo(x, y)
            region.lineTo(x+4,y)
            region.lineTo(x+4,y+4)
            region.lineTo(x,y+4)
            region.lineTo(x,y)

            context.fillStyle = "#beaa96"
            context.fill (region)
        },

        capture : function (context, x,y) {
            this.capturedPoints.push ([x,y])

            let region = new Path2D()
            region.moveTo(x, y)
            region.lineTo(x+2,y)
            region.lineTo(x+2,y+2)
            region.lineTo(x,y+2)
            region.lineTo(x,y)

            context.fillStyle = "#000000"
            context.fill (region)
        },

        finish_capturing : function () {
            var maxRelativeY = 0;
            this.capturedPoints.forEach ( (pair) => {
                let relativeY = pair[1] - this.startY;
                if (relativeY > maxRelativeY)
                {
                    maxRelativeY = relativeY;
                }
            })

            for (var i = 0; i < maxRelativeY+1; i++)
            {
                this.bounds.push ([250,0])
            }

            this.capturedPoints.forEach ( (pair) => {
                let relativeX = pair[0] - this.startX;
                let relativeY = pair[1] - this.startY;

                if (relativeX < this.bounds[relativeY][0])
                {
                    this.bounds[relativeY][0] = relativeX;
                }
                if (relativeX > this.bounds[relativeY][1])
                {
                    this.bounds[relativeY][1] = relativeX;
                }
            })
        }
    },

    setup : function () {
        const theCanvas = document.getElementById ("theCanvas")
        const context = theCanvas.getContext ("2d")

        this.restoreImage (context)

        document.getElementById("theStartButton").addEventListener ("click", () => App.restoreImage (context))

        var isShaving = false;
        var isCapturing = false;
        theCanvas.addEventListener ("mousedown", (e) =>
        {
            if (this.needToCapture)
            {
                isCapturing = true;
            }
            else
            {
                isShaving = true;
            }
        })

        theCanvas.addEventListener ("mouseup", (e) =>
        {
            if (this.needToCapture)
            {
                isCapturing = false;
                this.yak.finish_capturing ();
                this.needToCapture = false;
                document.getElementById("theStatusBar").innerText = "Keep shaving using your mouse";
            }
            else
            {
                isShaving = false;
            }
        })

        theCanvas.addEventListener ("mousemove", (e) =>
        {
            if (isShaving)
            {
                this.yak.shave (context, e.offsetX, e.offsetY)
            }
            else if (isCapturing)
            {
                this.yak.capture (context, e.offsetX, e.offsetY)
            }
        })
    },

    restoreImage : function (context)
    {
        const theImg = document.getElementById ("theImg")
        context.drawImage (theImg,0,0,640,480)
        this.needToCapture = true;
        document.getElementById("theStatusBar").innerText = "Trace the area you want to shave using your mouse";
    }
};

document.addEventListener ("DOMContentLoaded", () => {
    App.setup ()
})
