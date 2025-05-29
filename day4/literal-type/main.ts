let direction: "left" | "right";
direction = "left";
direction = "right";
// direction = "up" // 에러 발생;

type Direction = "left" | "right";
type Margin = `margin-${Direction}`;

let margin: Margin;
margin = "margin-left";
// margin = "margin-top";
