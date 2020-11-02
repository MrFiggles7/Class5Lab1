$(document).ready(
    function () {

        $("form").submit(placeOrder);

        function placeOrder(event)
        {
            event.preventDefault();
            var checkedBoxes = $("input[name=rank]:checked");
            var rank = checkedBoxes.data("rank");

            var firstName = $("#FirstName").val();
            var lastname = $("#LastName").val();
            $("p").text(`Hello, ${rank} ${firstName} ${lastname}`);
            $("p").show();
            setColor(rank);
        }

        function setColor(rank) {
            if(rank == 'Captain') {
                $("p").css("color", "red");
            }
            else if (rank=='Sergeant') {
                $("p").css("color", "blue");
            }
            else {
                $("p").css("color", "Green");
            }
        }
    }
);