/**
 * Adds the general palette to the sidebar.
 */
const addClassDiagramPalette = function (sb, expand) {

  // Reusable cells
  var field = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;');
  var attributeField = new mxCell('+ field: type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=attribute');
  var methodField = new mxCell('+ method(type): type', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');
  var _controller = new mxCell('Controller', new mxGeometry(0, 0, 100, 26), 'text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;spacingLeft=4;spacingRight=4;whiteSpace=wrap;overflow=hidden;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;componentName=method');


  field.vertex = true;
  attributeField.vertex = true;
  methodField.vertex = true;
  _controller.vertex = true;

  var divider = new mxCell('', new mxGeometry(0, 0, 40, 8), 'line;html=1;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;');
  divider.vertex = true;

  

  // Default tags
  var dt = 'uml static class ';

  var fns = [

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Internet Branking System', new mxGeometry(0, 0, 160, 90),
        'rounded=0;whiteSpace=wrap;html=1;shadow=0;dashed=1;sketch=0;strokeColor=#000000;strokeWidth=1;fillColor=none;'
      );
      cell.vertex = true;

      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Internet Branking System');
    }),

    sb.addEntry(dt + 'item member method function variable field attribute label', function () {
      return sb.createVertexTemplateFromCells([sb.cloneCell(field, '+ item: attribute')], field.geometry.width, field.geometry.height, 'Item 1');
    }),

    //linea sin clecha colo negro
    sb.addEntry(dt + 'divider hline line separator', function () {
      return sb.createVertexTemplateFromCells([divider.clone()], divider.geometry.width, divider.geometry.height, 'Divider');
    }),
    
    sb.createVertexTemplateEntry(
      'text;html=1;align=center;fontStyle=1;verticalAlign=middle;spacingLeft=3;spacingRight=3;strokeColor=none;rotatable=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;',
      80, 26, 'Title', 'Title', null, null, dt + 'title label'
    ),


    sb.createEdgeTemplateEntry('edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;entryX=0.5;entryY=0;dashed=1;jettySize=auto;orthogonalLoop=1;', 160, 0, 'Description', 'Relationship', null, 'uml generalization extend'),

    sb.createEdgeTemplateEntry('endArrow=open;endSize=12;dashed=1;html=1;', 160, 0, 'Use', 'Dependency', null, 'uml generalization extend'),
    
    sb.createEdgeTemplateEntry('endArrow=open;html=1;endSize=12;startArrow=diamondThin;startSize=14;startFill=0;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=bottom;rounded=0;', 160, 0, 'Descripcion', 'Agregacion', null, 'uml generalization extend'),
  
    sb.createEdgeTemplateEntry('endArrow=classic;html=1;rounded=0;html=1;verticalAlign=bottom;endArrow=block;edgeStyle=elbowEdgeStyle;elbow=vertical;curved=0;rounded=0;', 160, 0, 'Descripcion', 'Relacional', null, 'uml generalization extend'),
    
    sb.createEdgeTemplateEntry('endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;', 160, 0, 'Descripcion', 'Composicion', null, 'uml generalization extend'),

    sb.createEdgeTemplateEntry('endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;',160,0,null,'Composicion1',null,null),

    sb.createEdgeTemplateEntry('endArrow=diamondThin;endFill=0;endSize=24;html=1;rounded=0;',160,0,null,'Composicion2',null,null),
    

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Container', new mxGeometry(0, 0, 160, 90),
        'swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=26;fillColor=none;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;'
      );
      cell.vertex = true;
      cell.insert(attributeField.clone());
      cell.insert(methodField.clone());
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Container');
    }),

    //CUADRO DE COLOR PLOMO
    /*
     sb.addEntry(dt + 'object instance', function () {
       var cell = new mxCell(
       'Software System\nExisting System', new mxGeometry(0, 0, 160, 90),
      'html=1;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;fillColor=#999999;fontColor=#FFFFFF;fontFamily=Helvetica;componentName=class;strokeWidth=2;'
      );
      cell.vertex = true;
       return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Software System, Existing System');
    }),
    */


    // CONTAINER SIN ATRIBUTO - CUADRO SIN ATRIBUTO
   /* sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Notifications\n[Software System]\n\n""', new mxGeometry(0, 0, 160, 90),
        'html=1;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;fillColor=#999999;fontColor=#FFFFFF;fontFamily=Helvetica;componentName=class;strokeWidth=2;'
      );
      cell.vertex = true;
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Notifications');
    }),
    */


    // Tipo cilindro
    /*
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Database\n[Container: MySql]', new mxGeometry(0, 0, 160, 90),
        'shape=cylinder;whiteSpace=wrap;html=1;fontStyle=1;fontFamily=Helvetica;fontSize=14;fillColor=#438dd4;strokeColor=#000000;strokeWidth=2;fontColor=#FFFFFF;'
      );
      cell.vertex = true;
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Database');
    }),  */

   /*
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '\n\nCustomer\n\n[Person]\n""', new mxGeometry(0, 0, 160, 90),
        'shape=orEllipse;perimeter=ellipsePerimeter;whiteSpace=wrap;html=1;backgroundOutline=1;'
      );
      cell.vertex = true;
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Actor');
    }), */
  
    /* ACTOR 
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Actor555', new mxGeometry(0, 0, 160, 90),
        'shape=umlActor;verticalLabelPosition=bottom;verticalAlign=top;html=1;outlineConnect=0;strokeColor=#001933;fillColor=#ffffff;gradientColor=#FFB366;'
      );
      cell.vertex = true;
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Actor1');
    }), */

  /*
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        '<< Annotation >>\nComponent', new mxGeometry(0, 0, 160, 90),
        'html=1;dropTarget=0;strokeColor=#001933;fillColor=#ffffff;gradientColor=#FFB366;'
      );
      cell.vertex = true;
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Component');
    }), */

  /*
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Block', new mxGeometry(0, 0, 160, 90),
        'verticalAlign=top;align=left;spacingTop=8;spacingLeft=2;spacingRight=12;shape=cube;size=10;direction=south;fontStyle=4;html=1;strokeColor=#001933;gradientColor=#FFB366;gradientDirection=north;'
      );
      cell.vertex = true;
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Block');
    }), */

    /*
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Controller\n[Component: Node.js]', new mxGeometry(0, 0, 160, 90),
        'html=1;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeLast=0;collapsible=1;marginBottom=0;fillColor=#85C1E9;fontColor=#000000;fontFamily=Helvetica;componentName=class;strokeWidth=2;'
      );
      cell.vertex = true;
      //cell.insert(_controller);
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Controller');
    }),*/

    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'ClassName', new mxGeometry(0, 0, 160, 90),
        'swimlane;fontStyle=1;align=center;verticalAlign=top;childLayout=stackLayout;horizontal=1;startSize=26;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;'
      );
      cell.vertex = true;
      cell.insert(attributeField.clone());
      cell.insert(divider.clone());
      cell.insert(methodField.clone());
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'ClassName');
    }),
    
    sb.addEntry(dt + 'object instance', function () {
      var cell = new mxCell(
        'Container', new mxGeometry(0, 0, 160, 90),
        'swimlane;'
      );
      cell.vertex = true;
      return sb.createVertexTemplateFromCells([cell], cell.geometry.width, cell.geometry.height, 'Container');
    }),
  ];

  sb.addPaletteFunctions('classDiagram', mxResources.get('classDiagram'), expand || false, fns);

};

module.exports = addClassDiagramPalette;