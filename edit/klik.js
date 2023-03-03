var tekst=document.getElementById('textbox');
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
var trs = document.getElementById("but");
var clear=document.getElementById("clearbut")
var szerimage;
var wysimage;
ctx.canvas.width=screen.width-20;
tekst.width=screen.width;

//var hov = document.getElementById("hov");
//
//clear.addEventListener("click", Clear);
var renderbut = document.getElementById("renderbut");
renderbut.addEventListener("click", render);
function render(){
	
	
	console.log(1234);
	
}

function save()
{
	
	
	  var img    = canvas.toDataURL("image/png");
}



function klik(string)
{var str
console.log(string)
switch(string){
 case "alfa":
   str="{alfa$}";
   break;
 case "beta":
   str="{beta$}";
   break;
    case "potega":
   str="{potega$[][]}";
   break;
 case "calka":
   str="{calka$}";
   break;
   case "logarytm":
   str="{logarytm$[][]}";
   break;
 case "pierwiastek":
   str="{pierwiastek$[]}";
   break; 
   case "podloga":
   str="{podloga$[][]} ";
   break;
 case "ulamek":
   str="{ulamek$[][]}";
   break; 
   case "produkt":
   str="{product$}";
   break;
 case "nieskonczonosc":
   str="{nieskonczonosc$}";
   break;
   case "kat":
   str="{kat$}";
   break;
 case "stopnie":
   str="{stopnie$}";
   break;
   case "sigma":
   str="{sigma$}";
   break;
 case "strzalka":
   str="{strzalka$}";
   break;
   case "pi":
   str="{pi$}";
   break;
 case "odu":
   str="{odu$}";
   break;
   case "pusty":
   str="{pusty$}";
   break;
 case "nier":
   str="{nier$}";
   break;
   case "nalezy":
   str="{nalezy$}";
   break;
 case "przyb":
   str="{przyb$}";
   break;
  
}

 var position=tekst.selectionStart;
 var poc=tekst.value.substring(0,position);
 var kon=tekst.value.substring(position,tekst.value.length);
 console.log(poc)
 console.log(kon)
	tekst.value=poc+str+kon;
}
function Clear()
{  var position=tekst.selectionStart;
    console.log(position);
	tekst.value="";
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	
}

 class Funkcja{
	constructor() {
	this._data = {
			
			id: '',
			rodzaj: '',
		
		plik: '',
		url:'',
		ho:'',
		wo:'',
	
		
			
					
		};
	}

   
	   
	   ustawdane(id,rodzaj) {
				this._data['id'] = id;
		this._data['rodzaj'] = rodzaj;
		
      switch (rodzaj) {
  case "alfa":
    this._data['plik']="";
	this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABl0lEQVQokZ2SvWvCYBDGX2PDC4JCFCUgTiouweDm9ooITi4O2R0U5/hXCGZxcBUcHRU3hw4KDgq6iIMI2iwSCCgBFYlPh9CiKe3QZzmOu98d9+EBQP6rN8fs9/ter2eaJiGEUlqpVFKp1G/M7XajlBJCCID1eh2LxUKhEGOMMZZMJnmeVxTlfD7jhzqdjiAIl8sFAAFQKpUkSdrtdk74er22Wi2O42RZns1mtm1/k8fjURRFRVEclwDI5/PVatXVYblcSpLk8XhyudxqtXKKMsYikcjhcHiBi8Xi4/Fw8ff7fTgciqJIKZ1Op/V6nef5wWDwnUAAaJpGCNlsNj8nBHA6nTKZDMdxXq+33W4/hwgA0zQTiUShULAsy0UahtFsNsPhMCFElmVnTy8wgPF4LAhCOp3u9/vvX+p2u8Fg0OfzNRqN0WgUCAQYY4vFwg0DmM/n2WzWddJyuWwYhpMwmUzi8TiltFarbbfbFxiAbdu6rn98Sdf15zs5C9c0ze/3q6oK4O25D8dx0Wj0j3+klKqqalmW83+fdvOJWKzahmAAAAAASUVORK5CYII=";
	this._data['ho']=20;
	this._data['wo']=20;
	break;
   case "beta":
    this._data['plik']="alfa.png";
	this._data['ho']=29;
	this._data['wo']=20;
		this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAIAAAAl5NuSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACYUlEQVQ4jZ2Vv0t6URjGn+uxS6YtKoSZOEggIsLFTQcJWlqDxFXCSQRHSXRzcY7+gYgQBBX/AMFJBC+4FS2SDjqoSN3koNfbcPze/PlNe7b7cD7nfc/7g8spioIFSZJUrVZFUWy1WswhhFxeXl5fX2s0GqxIWdDLy4vP51s9ARBCQqEQpVRZFqdGHg6HLper2+0SQux2u9vt5jgOQLvdFkURQCQSub+/53l+NfJsNotGowAODw/z+fx4PFavp5SGw2EAHMdlMpnFyHO4Wq0SQgCk02llTf1+PxAIAHA4HLIsr8J3d3cAXC6XJEnrsKIoj4+PLHihUFDNeQE/Pj4A2O32o6Oj9YIBCAaDp6eniqJ0Oh3VXKv+FvE8v37vrvBG7QHLsvxHuNlsvr+/A9Dr9aqp/T8zHA7r9bokSdlsVpZli8Vyc3OzKxwOh0ulkvqZTCYNBsOuaZ+dnan7oNFoisViuVz+2SXW7lgsBuDq6mplNiaTSa1Wi8fjWu08R57nK5XK0oRtg5mm06koislk0mq1Ari4uGD+L29mIoQIgiAIwvHxcSKRUIdsjz5/fn42m81FZyd4Op0WCgWPx/P8/AzA7/czf2vab29vqVRqMBgA6PV6r6+vlFKO42KxWCaT+QV+enrK5XKLjtlsfnh42DAkBwcHLNp4PNbpdABub2+/vr4opeyAIAh+v//8/HwpAis6e4zRaOz3+xu7tVHzghmNRgCSJLHp31Fz2Ov12mw2SmmxWNwbNplMbrcbACvvfjD+Zd5oNP4Cx+Pxk5MTp9O5O/zzxwAwGo30er26QL/qGyBDy5a9w3mKAAAAAElFTkSuQmCC" ;
	
	break;
     case "pi":
    this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAIAAAD3FQHqAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABNklEQVQ4je2TPa6CUBCF56KGSENpolQsgI7KksoN4CLYEJGEjgJK2IChQYkdtiaG0GpjqMi95xWY9wwvIfhTeqqbydwvZ05mGAD6kMZEBKBpGiHEC/8ZY5PJRJIkakFpmhqG8ZoXRVE2mw0AAGMi8jzvdDqZpskYewGnqur9BWC/30dRxDkHwDmP4/hwOOB5EQAhRAsCUNe1pmm2bXf6zuez4zhZlvWwpDa/e3hEQoiqqi6XS2eQoihc191utz3DSgND4Zy33j/AGqIvq091Xadper1en2bJsizL8vF43O12eZ7nee77/nq9TpLkr6mzb7fbjYgsy+rUy7L8f7PT6TQMw9+e8UBfi8XCcZwgCB6Ly+VytVo97WuIunmNRiNd1+fz+UC/j2Kds2jPWFGU2Wz2Lusd/QC8xl8xfCbIlwAAAABJRU5ErkJggg==";
	this._data['ho']=20;
	this._data['wo']=25;
      break;
       case "pusty":
	this._data['ho']=18;
	this._data['wo']=26;	   
	this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAIAAADKe1n0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAACAklEQVQ4ja2UP+g5YRzHHzoUNwiJ1C8ZGG5yMdBPUSyYWCijbMQi1G1miwxuMJBislwpFgNmioxXN7hMDFfXuXK/4fm57ufv8P29p6f3+/m8ej9Pz51KkiTwA4miyLKsyWRCURQAAKRv4nn+ctftdlNGHMc1m00AQCKRgM4n3Pl8rtVqfr9f7lIqlcbjMUxpmna5XNC3WCxfcI1Gw2q1vjwgjuMYhsG1Xq9PJpMsy37CLZdLm80GAEAQBMdxiqIoiqrX6w6HQ8l1Op2dTkc5+AJ3OBzsdjtkVatV2WcYJhKJyCyPx3M8Hh9mX+BmsxkcKBaL0OF5fjKZIAiirBYIBERR/I4LhUIAAKvVutvtJEm6Xq/BYFCmeL3eXC4H19Pp9GFW/e5Bmc1mDMO22204HF6v13Lf0WiUSqXeTSHvAkEQCILo9/sMw8Cy3W43Ho9rtdr9fv9u6sVh2+22coNKpcrn85vNBqYcx6XTaQCATqdbLBZf7k4UxXK5LLNQFCVJUk4FQSBJEkaxWOy5yiOuUqkoq+n1eoIg5BT2AgC43W6GYT7hTqdTKpX6+yUrpFarf9+l0WigWSgUnln/4AaDAdxqMBharRZFUZlM5vmujUZjr9e7XC5fcDRN+3y+aDQ6n8+hw3HccDjMZrO/7iJJcrVavQRBqaSf/e8eb+Y/sgAAfwBhXqbaoJxsFwAAAABJRU5ErkJggg==";
	break;
      case "przyb":
	this._data['ho']=20;
	this._data['wo']=37;	   
	this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAUCAIAAACF2mNcAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC60lEQVRIib2VTUgqURTH7+gTkXKcMZ6RkEQaWi5UaOMqGnDRhzUatkgi3LqwoPZC4C5w0ceidaALoTBwoVjMwiADLdoI5aLFBJI5wmQGOk6LifcmnUZfxPvv7vmfOb87h3vPhViWBf9RvzpDtVotmUzGYrHHx8c2SyqV4jju9/slEsnP8CqVis/nIwjCZrNNTU1BEMR3KYoKBoM3Nzfb29tDQ0PipZ+fnzOZjNPp/FSE5anRaCwsLBiNxkKhwAqp1WqlUimLxTIzM1Ov1wVzOJ2fn09OTlqt1mazyY//5TEMc3h4iKJoNpsVKcSybC6XUyqVyWRSJGd8fHx+fv7+/r4t/sGjKArHcZVKtbe3Jw7jdub3+3U6nWAbGIbZ3d1FEIQgiE73gxcKhUZHRy8uLrrCOFWrVQzDMAyLxWKVSoVvPTw8KJXK/f39Vqv1Jc9gMIRCoR5hnG5vb+12O4qiKIr+5kmtVkulUpIkBb+CWJYFAGQyGZPJNDAw8K/n++npiesbP9jX1+dwOGQyGbcslUoKhQKGYQAAxHa777lc7vLykktTqVSzs7Moiva+obe3N7fbjWHY1tYWAJ/vQ5teXl6CwSCCICaTyWw2m81mnU4nl8t9Pl+xWOyx7Ts7O4ODg/l8nlt+yaNpenV1VavVhsPhRqPBBcvlcjQatdls09PTtVqtF14gEHC73X+Wwjyapr1e7/Dw8PX1dadbKBQ0Gs3GxgZFUeIwhmGWlpY8Ho8Y7/X1dWVlZWRk5Orq6qtCiUTCYDBYLJazszPBc88wzNHRkcvlksvl0WhUjHd6eoogSNcpQ5Lk8vIyDMMHBwc0Tbe5x8fHMAyvra2dnJzwJ5/A+YxEIpubmyRJtg3rTt3d3c3NzZVKJRzH+/v7+VY2m1UoFPF4HEEQflzgPQIAQBDUFQYAGBsbi8fj6XSaIIh6vc639Hr9+vp6GwwAofsQiUS0Wq14M78tgWdzYmJicXGx6899T93ny8/qHVt4ddnvSJEWAAAAAElFTkSuQmCC";
	break;	
	      case "nier":
	this._data['ho']=18;
	this._data['wo']=22;	   
	this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAIAAADQR7l6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABcElEQVQ4jZWUP8uCUBTGb2/iYDk0OChOEQQNoR8gbHB1aHdxaLj4AYKawsm5L9LQ4hq0iYJgUKtBkKBQCArFfQcj/xSlZ7vnnOe59/7O5TYQQqBOBEGA43i73X5l/mrpz+fzeDzebDaFLKocl8uF53lBEG63Wz5f1SKOY5ZlBUFIkqRUqmqhqipFUZZlvZd+WyRJAiGkKMp13Y8NDYQQAODxeMxms/1+/44wiqLtdtvtdvv9/is5GAx0XW82mxnOKIpqjSa1TrVYuiYIwnGc0+mUb7Jte7FYQAglSSrpWZYlCOLHUK/X62g0Gg6HYRh+h/Vk4fu+pmn5fXa7nWVZsix3Op2PFyFJcj6ft1qt5yl0Xa/LAgCwXq8zFoqivEAYhnE8HiGEGIZ90ZMkKYriBxaO49A0PZ1O7/f7zyeTRtliMpnQNO15XkV9wSKOY0VRGIY5HA7V9QWL5XIJADBNs5YeIZT9F71eb7VacRxXdy7/pjiGV7dvirUAAAAASUVORK5CYII=";
	break;
	      case "nieskonczonosc":
	this._data['ho']=20;
	this._data['wo']=49;	   
	this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAUCAIAAACrn0LOAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAD/UlEQVRIic1WXyi7Xxg/795tL7ZsvLNlyL5Ji1ZSSuSCFAsNNyMXphZXpDTCLoTkikTJlSsulj8pQy83stUyLZm1xMZ2YWNjzGw2tvf9Xkz7asu+4/tTv8/dOc/zfM7nPOd5zjkQQRDgB6DRaBQKhcfjCQ/v7u4ODw9vb28jDhQKJT8/X6lU/vr1KzqY+AE4nc6ioiIYhj8uRKVSURRlsVgsFgtFUQRBAAALCwux4eT/Nj0XFxcmk0mpVJ6dnaWlpRUXF6ekpIRNxcXFcrmcTCYDADwez9DQ0Pz8/NLSUm1tbU5OzscNQJGze3l5wTBMp9O9vr7GWRWGYT6fX1dXl5GREWXS6XT9/f0ajcbv91MolM7OzsnJydTU1FgSgiBWVla6u7vdbndVVVVLS4tYLKbRaH/MgUBgZ2enqakpMzMzKuGxgCAoPT29t7fX7XZHsh0MBg8ODioqKiAICrs1NzdbrdY45+tyufr6+hAEgSCIw+Gcn59HTJDRaGxtbTUYDDiOs9lsiUTC5/Mj1LFwOp1zc3PX19fV1dUYhl1dXcnl8s3NzZeXFwBATU3N9PR0YWFhHIaPODk5aW9v1+v1JSUl29vb77lXq9UkEgkAMDs7azabvV5v/PoNBAIKhUIgEEil0lAoNDExkZycjCAIj8eTyWQ2mw3H8cS7IRgMKhQKLpdLpVKnpqbCk0ClUoUlPzw8JM71/PwcCoWsVqtQKCSRSD09PcFgMPHwj/B4PG1tbQCAhoaG8Mw3+y5cj5eXl6enpzAMi0SivxbiZ6DT6VF9QPoeEQAgEAhgGHZzcwPDcHl5+bd5YvF9TT6fD8OwUChUUFAQuYS+CoIgzGazxWL5V004jjscjtnZWb1eTyaTx8fHAQAWi0Umk83MzNjt9lAolKCg9fX1+vr6/f19CIIoFMq74as1juO4VqstLS0lkUgIgrS0tNjtdoIgFAoFm82GIEggEGxsbLy9vf2Vymg0crlcGIZ5PJ5IJNra2vpOjZtMprW1tb29vaOjIyaT2dHR0dXVxeFwAABlZWVSqXRxcdFgMAwODu7v71Op1Phser3e6XTm5eWNjY01NjYmJSV9OU+np6f19fWRyNHR0cfHx48OT09Pq6urubm5iW8SQZDBwUG/3/+RB6jV6nAbLy8v+3y+zwS5XK6BgQEGgxHmys7O1mq1sW739/cjIyMoiiaoqbKy8vj4OIoEMplMEolEo9EwmUwURcN3eiyCweDNzU0gEBCLxcPDwzQaLTs7O/zIR8Hr9d7e3r69vSWiicFgcDic6IcIx3GVSiUSiSI5+Ax0Ol0ikUSd10/g/a9is9l2d3cdDkccTSiKCoXCrKysRBLwL/jzf/r/4Df26BdSQwR+YwAAAABJRU5ErkJggg==";
	break;
	case"product":
	this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAIAAAApXzB9AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAET0lEQVRIie1WS08qSxCe7ulxGEAhMRGM4oON4iMaExONulATFyYu3fhb/BVuXZtg1JWauDDxFY0LQTC68MEAgTDKyDvAPJieu6h75nDVc+69ybl3dWrRYeiq+qq6uusrlEgkNjY29vf3i8VivV5HCDEMYxgGpRRjLAgCz/MIIUop80kQQgghTdNqtRohpNFogCGl1OfzTUxMLCwsLC4u+v1+juNQqVQKh8OiKKZSqcvLy2g0Wi6XG42G3W4fHBycnp4eGBgghOi6Dq4tGEopIaSlpSUej29vb0uSxDCMqqqNRsPlcq2uri4vLw8ODnZ2djocDpZlidPpnJqampyczOVyQ0NDFxcXDw8PsVhM1/Wenp6FhYXZ2Vme5w3D+IBkmibGmGVZSZJ4nhdFUZblSCRSLBbHxsZWVlbm5uacTifGGPQJxpjjOEKI1+udn58fHh6+vb0NBoOhUKhQKKiqyvO8zWajlMJZNZ+eaZqmaXZ1da2trVUqlVAoJMuyaZrj4+MjIyNOpxMUAIwwDIMxNk0TIeR2u10uF8dx19fXkUhEURRVVU3TtDL4gARZEkJ8Pp+u65Ik2Ww2juNcLpfdbgdly4RYhTUMwzAMQojT6WxrayOEYIxhRQhhjL9EMr8JpdS6DiDom4AmbjaDbUjCcvT5yn3e/aAG2B+UvyMhhFiWhR+GYfwco9kKMmZZ1jquD9l8kVOz/T+B+VfyNdJ/Ib+RfiP9RvofkH55m/ibbvQL8f5Egn4KjVxV1Xq9ruu6pmmapln89JOea3EHfAKDQJu2/sRALRajMAwjSdLb21utVqtUKrVaDbZ+BNMcotXCgceBrixNYkVkDTrJZPL9/V3XdUVRqtVqs4svkcA1wzAwGwE722w2QshfTg9oCdil0WjEYrHT01NRFFVVrVQqoii+vr4Chf/o6CCCfD4fj8dLpZKmabIsZ7NZVVWbc2LX19ehHvl8/uTkZHNz8+joKJvNmqap63o6nU6n0319fe3t7RbXNdcGfKVSqWAwuLW19fLyUq/XJUm6v7/PZDIsy34fFGRZfn5+zmQysiyfnZ2dn58XCgUoDKVUkqSjo6OBgQFBEPr7+1taWqxZx0qoXC4fHx/v7+8/Pj7CbJpOp3O5XCKReH9/RwiNjo46HA4iiuLe3t7V1VW1Ws3lcsViEXxZaz6fPzw8dLvdbW1tHo+nuTyU0nK5HA6Hd3Z2otGooijWJazVak9PT7qu8zwvCEIgECCaphUKhWw2SykVBAGmJ7hRMAxVKpVkMnl3dzczM9PR0QEJwSytKEo0Gt3d3b25uYFsmtNVVTUejx8cHLS2tnq9XtLd3b20tOT3+0HPej2AxLJsoVDI5/OBQACCgFLBk9A0LZPJJJNJh8MBu81XAGNMKS2VSul0WlEU0tvb6/F4NE378pUwDKNpmqqqgiC43W5r5IOVZVmXywVRGoZhBWopGIbBcVxvb6/NZvsDIWffdB5wUeAAAAAASUVORK5CYII=";
	this._data['ho']=30;
	this._data['wo']=35;
break;

    case "calka":
this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAIAAABxU02MAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB30lEQVRIie2Vv+/pUBjG3/Zovir1ayaR1GSSWCwVk4h0NfkTTBaDxdxYa2WSiM0kFhEmA0UiWgOTSQykQULbc4eTuO699LJ7pifnnM953rwnOS+FMQZbbTabTqej6zoAIIQikUgmk3E4HAAA2FaKooRCIZqm73e5XK52u0127WDTNGOx2L+1iKJ4uVz+A89mM5KZzWbn8/l0Ok2lUgDgdDpJuB0sSRKJGg6HZKXb7ZKVarWKMXbYtOp4PBLD8zwxpmkSU6/XOY6jn3Mv1Gg0iFEUJZ/Pfwbvdru7P5/Pn8EMw9y9x+P5DBZF8efnBwC8Xm+tVrPrdqlUIsx2u3164LPkv/SFv/AX/sIAAOAwDKPVaqmqihCKx+PpdBoh9C48mUwkSVoulwihZDIZjUYDgcCbMF0sFheLhWVZt9ut1+utVqv3y6YfJyj5Ez+AZVlOJBLvA3/APp+vUCiwLAsANE3fq7As63G4PBfG+Hq9hsNhAOA4bjQakeLX67XP5wMAnuf3+/3LT59hmFwuhxA6nU6DwUDTNFVVZVk+HA4AUC6X/X7/y2SMsaZpT18oGAzquv5qHv2eVZVKxe12UxR1J1mWbTablmW9gqnHtxmPx/1+3zAMAKAoShAEQRBs+vULbvu8QvxZFMcAAAAASUVORK5CYII=";	
	this._data['ho']=40;
	this._data['wo']=20;
	break;
	
	   case "sigma":
this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAoCAIAAABihA14AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC4UlEQVRIidXWP0g6URwA8O+JGBYUJGgFQUFOh4vDESaNR4PZ0Bi0RYS0NARBgdpQg7NDR5tEVDTk5JJSgzUkXFB2VBRRDhmSohx42vc3fOPs58/My1t+3+3en8977+7d9z0GEff399/e3kCPmJ6etlqtsLe3ZzabdREBwOPxIKKhWCyWy2W90FwuBwAMIq6srGxublLp5OQky7KaoJubm2g0Wq1WAeD8/JzjOEBESZIGBwepxfLyMmqMs7Ozvr4+6h4MBhERqOLi4oJKOzs7c7mcJlRRlNHRUerucrlqaKVS8Xq9VMFxXDab1eSOj49T352dnRqKiLFYrKenh+oikYgmNBgMmkwmu91+e3v7F4qIPM+rk31/f28dzefzyWQynU4rilKPZjIZjuPI3d3d1TTZrwF1z4IgqF8smUzqg8qyPDw8TO7MzIwsyzqgiJhOp9V9d319rQ+KiIuLi4Ta7XZJkvRBRVHs7+8nNxAI6IMi4snJCaEWi0XT9mqGyrI8MTFB7tramj4oIh4dHXV1dQFAR0eH2+1+fn7WAUXEsbExNcVFo9EWUUPzXDkyMtK8QeNoMmAqlbJYLNRsdnb28vKy3eXn83n1F5ifny+Xyy2K36KKomxsbJBos9lEUWxd/BY9Pj5W38/h4aEmsTF6f3/vcDhI9Pl8pVKpXfTj42N1dZXE7u7up6cnrWIDNBKJkGg2m+Px+C/EevT19dXtdhPK8/zvxHp0amqKRKfTqfVAbYzG4/He3l5CBUH4tVhDv16nlpaW2hE/0UKhMDc3R6LD4chkMjqgiUSCRKPR2M7JXENTqdTAwACh6+vrbXLValUURfD5fCQODQ09Pj62iT48PLAsy6gLPz095TjOYDBQWnp5eQGA7e1tm80GALIsZ7PZHxPp1dWVx+P5RBmG4XmeZVmTyQQAW1tbdCdeWFigW9vd3d3BwcGP6P8WTDgc/rfU7/cXi8VQKKSVkyRJEIQ/jBq4f14g5x8AAAAASUVORK5CYII=";
	this._data['ho']=40;
	this._data['wo']=28;
	break;
	
	   case "odu":
this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAIAAAAQS2/OAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC/UlEQVRIie1Xv0srQRCe2dvb5CIIEWJSCIJtIPij0ForCYjF2Ylga2cpCmLlH2B5iCCChWKTys4iloqNhWihlQa9YEROzN3uvGLyLmpQzHvP6uUr7o672fnmxx77DRIR/CQk34hIay2lBIDd3d2tra2bmxsAQMQvIhBCGGPS6fTMzMz8/HxPT48xBhERsWnEronIGHNwcDAxMdHX19dumOl02nVd3/fZmzGGfgPYdRiG29vb+XyeFyCiUkopZdu2+hz8lfMGgLm5ubu7OyIKw/AdAREdHx8PDg4CQCqVklIiomVZ8hvgati2LYQAgKWlpXq9TkR8bRIsLi46jhPb/QEQUUrZ1dXleV61Wo0zkNyG8/Pzl5eXZDIZhiEvYD7u8LumvQERBUGgtebnKIq01gsLC9fX18vLy4lEQggBRHR1dTU8PAwASql48c7OTq1Wq1arj4+PtU/w8PAwNTUlhEgkEryKC5DL5TY2Npol8jyvt7eXS8nxjo6OXl5e0jewtrb21jXvDgBwXbdZosPDQ9/3hRBxQYrFYiaTiaIoiqJ4k7TWh4hmZ2ejKPI8r1Kp8Etmenp6atoVCgUO37IsAJBSlstlY8yHHd0K/oFqtdrq6mrc6mQyiYiTk5NsIwCgXq/zN24mIg4MDCCi1vqz9sZleX5+7u7uLhaLrck1bL7YJN+BlJKT+DQIJvzwti1K/iu/IvhRdAg6BB2CDkGH4H8n4HPsBwn4WPz3BBy47/u3t7fw94d+jNgJi8/T09P19fUGAY8eQgg+vh3HaZeSo7YsiwcWKaXW+uTkpKGLstlsFEWvr69hGGqt8/k8y7/v0LCN4ziO47COUkqxHO7v729o0729vUKhYNt2KpUaGhra399ndf+1rGOEYWiMqVQqKysruVyOWS3LGh8fPzo6IqLGCFYqlcrlslJqZGRkenq63fogYhAEm5ubZ2dnQRBks1nXdcfGxkqlUkPXtyrOtmCMaU334uIik8kIzuhtRH8w5HyYLFnsGmPu7+9/AVDyj4dILcijAAAAAElFTkSuQmCC"	;
this._data['ho']=40;
	this._data['wo']=32;
	break;

	   case "stopnie":
this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAeCAIAAAB11XNZAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA1ElEQVQoke2QsQ3DIBBFLwiZEZDYgEloPAQSbOCGCei8BT2NC+QBEEO4YIVrTUEK7BQpki5VfnN3+u8OfR69d/goOsp5nuu6bts2xnmel2WZpgkAoPfee3fOva0654YFrTXvPaWUMRZC2Pc9hMAYo5R671trEGMEAM55SqnfSilxzgEgxkjGTSmlUur1hFJKSjn6i6i1llJeRCml1noNiGitJYQIIXLOx3HknIUQhBBrLSJeWbTWb1m01leWURDRGMNvGWMQcViPr39KPtt/4k/8gHgC2bF+hWYu2jwAAAAASUVORK5CYII=";
this._data['ho']=30;
	this._data['wo']=11;
	break;
	
	 case "nalezy":
this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAIAAAAP9fodAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABkElEQVQ4jaWTO6vCQBCFJ4sKvrYRNJWmEiJ2ilj5qBTso4WCFv4Y/4RgaSFiIwhWEgRhQSyEBLGxFBtfVWDWIqLeaHK53tPtLme/2dk5Aucc/i7yhQcAXO9by+Wy1+tpmoaI76ehUKhWqwH/KcZYqVTy+/2CIHzkuN1uSZKstOFwqKrq9Xq1K88wjEwm86QZhjGdTtPpNAAUCoX9fs/tdacdj8fRaNTtdjVNA4ByuRwMBp16Yrrn87ksy4QQAJBlmTGGiL/QLpeLqqq6rput2+129Xrd4/G83k4prVQqzWZTFMU7bb1eS5LkVBIAIYRSOplMTBoBAK/XG41GnW2IGA6HA4GAuXQBgCiKiqLMZjMAaLVaxWLxozMSiSQSiaftlZbNZhuNhjMZvp7J/40yIYQQgoiDwWCz2VBKc7lcPp+39ZkNXSwWyWTysenz+VKp1Hg8tvtuwYzp6XTq9/udTme73T7M8Xg8FotZMNbgnM9nXddXqxVjrFqtWqbkITM41rxxzhHxcDi02227dymKcgPuDCGYCaPxHgAAAABJRU5ErkJggg==";
this._data['ho']=20;
	this._data['wo']=18;
	break;
	
	 case "strzalka":
this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAARCAYAAAC4qX7BAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB6SURBVEhLzZbRCsAgCEV1///Pa0E3nIxqWdqB6C2PphTfD3QAV9nDMYswc10WllbEIrTlamaq9GrW2WxG6M2EW7P2KuQ+NRDSUu4iEikTKiIJFZENHCKSBfQUuYkguBYA5kevNZKZ0eO3VaSV/RdLRRD8jwA45D9ClAC6HzcYSnbfAgAAAABJRU5ErkJggg==";
this._data['ho']=17;
	this._data['wo']=34;
	break;
	
	case "kat":
this._data['url']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAdCAYAAABfeMd1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE5SURBVEhLxZZB1kMwEMejK25h6RjsLN2Apa0T4BTsHMkxuAE7NenoF5GJSKvf7715E80k/3Qm43GWFXYzD/S38v8ibduyKIpYURRsHEf89YjjONxIoCYqmqaBWr3Ndd2l6zqc/UOMoSBnfN/fbbBZ3/cYsRcAoyDTlaYp93EcsyAI+Bio65p7OT3rXjhS8NJSMwwD93B6CKXsjPMIJMsyKwHAuBnneWae5+HTC8Ol7FLHX6qDgHEz2goARiKqRquqCkcGQLp0QAhlYs/o0IrIm07TtIRh+H5OkgQj9ZAi4uZgG3LPmEDeLl2hxTli+Q5l4T+5SSoOIt8WAHYidwgAvCby5t9iO6Rxx3/CT0QO6dr+og75jXy25tJbWOTKwazTtX5Y4Ogca5GyLLnP85x7HdbpusIPbhdjT+EzeC/eDOPHAAAAAElFTkSuQmCC";
this._data['ho']=15;
	this._data['wo']=17;
	break;
	}
	

	
}}
 class Pierwiastek {
	constructor() {
	this._data = {
			
			id: '',
			rodzaj: '',
		wnetrze: '',
		funkcje:[],
		plik: '',
	    cz:'',
		url:'',
		taburl:[],
		tabwo:[],
		tabho:[],
		wo:'',
		ho:'',
		
			
					
		};
	}

   
	   
	   ustawdane(id,rodzaj,wnetrze1,funkcje,turl,two,tho) {
				this._data['id'] = id;
		this._data['rodzaj'] = rodzaj;
		
   wnetrze1=wnetrze1.substring(1,wnetrze1.length-1);
  if(wnetrze1.length>2)
    this._data['wnetrze']=wnetrze1;
  this._data['funkcje']=funkcje;
 console.log(wnetrze1);
    this._data['plik']="pierwiastek.png";
    this._data['cz']=wnetrze1.split('$');
	 this._data['taburl']=turl;
	  this._data['tabwo']=two;
	   this._data['tabho']=tho;
	this._data['ho']=Math.max(30,...tho);
	
	}
	
	ustawurl(url)
	{
	
	this._data['url']=url;
	}
	
		
	 dopierwiastka(ctx){
		
//const image = new Image();
//const image2 = new Image();
//const image3 = new Image();

var URL=this._data['url'];
var szer=this._data['wo'];
var wys=this._data['ho'];
this._data['wo']=1.2*szer+10;
this._data['ho']+=20;
let ur="data:image/png;base64,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";

dra(ur,0,0,1.2*szer,wys+10);
dra2(URL,szer,wys+20,szer/4,10);

function dra(url,x,y,wx,wy ) {
  var img = new Image();
  img.src = url;
  img.onload = function () { 
    ctx.drawImage(img, x, y,wx,wy);
}}
  
  
function dra2(url,w,h,wx,wy ) {
  var img = new Image();
  img.src = url
  img.onload = function () { 
    ctx.drawImage(img,0,0,w,h, wx, wy,w,h);
}}
  


  
  
  
}

 maketext(ctx,canvas){
		
		
	
		


		
		
		var dop=0; 

	
	this._data['cz'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho']));
var dataURL;
//setTimeout(function(){ dataURL=canvas.toDataURL();	console.log(dataURL);  }, 50);
//dataURL=canvas.toDataURL();
//console.log(dataURL); 
	this._data['wo']=dop;
	var h=this._data['ho'];
//	setTimeout(function(){mal(dataURL,dop,h);},60);
	
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	//mal(dataURL);
	
	
	
	function wypis(item ,f,ur,wo,ho)
	{
		console.log("itemy");
		console.log(item);
		if(item.indexOf(".png")>-1)
		{
		var t=item.substring(0,item.length-4);
		t=parseInt(t);
		
		
		var ii=f.indexOf(t);
		
		 
		 
		
	



 
  var pip=dop;


dop+=wo[ii];
var pi=0;
var h;
if(ho[ii]>30)
	h=3;
else
	h=ho[ii]/2;
var img = new Image();  
 img.src =ur[ii];
img.onload = function () { 
  
  ctx.drawImage(img, pip, h);
	pi++;


}
//loadImage(ur[ii]).then=>(function(img){ctx.drawImage(img, pip, wo[ii]/2)});
			
	
	}
		else{
		
		var dl=item.length*20;
		ctx.font="30px Arial";
ctx.fillText(item,dop,30);
	dop+=dl;}
 }	

	
	
	
	

 function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load', () => resolve(img));
        img.addEventListener('error', () => {
            reject(new Error(`Failed to load ${url}`));
        });
        img.src = url;
    });

 }












async function insertImg(url) {
  const newImg = new Image()
  newImg.src = await new Promise(resolve => resolve(url))
  // newImg.classList.add('js-my-image')
  
  newImg.onload = () =>  ctx.drawImage(newImg, pip, wo[ii]/2);
  newImg.onerror = () => {
    console.log(`No image located by '${imgSrc}'`)
  }
}











			
	
	

 }	
}	
 class Potega{
	constructor() {async function insertImg(imgSrc) {
  const newImg = new Image()
  newImg.src = await new Promise(resolve => resolve(imgSrc))
  // newImg.classList.add('js-my-image')
  
  newImg.onload = () => document.body.append(newImg)
  newImg.onerror = () => {
    document.body.append(' No image ')
    console.log(`No image located by '${imgSrc}'`)
  }
}
	this._data = {
			
			id: '',
			rodzaj: '',
		wnetrze: '',
		dol:'',
		gora:'',
		funkcje:'',
		plik: '',
	url:'',
		taburl:[],
		tabwo:[],
		tabho:[],
		wo:'',
		ho:'',
		
		
			
					
		};
	}

   
	   
	  	   ustawdane(id,rodzaj,wnetrze,funkcje,turl,two,tho) {
				this._data['id'] = id;
		this._data['rodzaj'] = rodzaj;
		
	   var kindx=wnetrze.indexOf(']');
	   var wnetrze1=wnetrze.substring(1,kindx);
 this._data['gora']=wnetrze1.split('$');
 
var wnetrze2=wnetrze.substring(kindx+2,wnetrze.length-1);
 this._data['dol']=wnetrze2.split('$');
 
  this._data['funkcje']=funkcje;
  
 this._data['taburl']=turl;
	  this._data['tabwo']=two;
	   this._data['tabho']=tho;
	this._data['ho']=Math.max(30,...tho);
	
	}
	
	ustawurl(url)
	{
	
	this._data['url']=url;
	}
	
 	maketext(ctx,canvas){
		
		
	
		

var items=this._data['gora'];
var funkcje=this._data['funkcje'];
var tabliceurl=this._data['taburl'];
var tabszer=this._data['tabwo'];
var tabwyso =this._data['tabho']
var itm=this._data['dol'];		
		
		var dop=0; 

	this._data['gora'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho'],30));


	
	//for(var item of items)
//	{
//		console.log(item);
		
//		var res= wypis(item,funkcje,tabliceurl,tabszer,tabwyso,30);
//		
		

	
		
//	}
	

	
	
	
	
	
	
	var pop=dop;
//dop=dop-10;
var p=0;
	
	//	for(var ite of itm)
//	{
//		console.log(ite);
		
//	var res= wypis(ite,funkcje,tabliceurl,tabszer,tabwyso,15);
		
		
		
	//}
	
	






	
//var pop=dop;
//dop=dop-10;
//var p=0;
this._data['dol'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho'],15));
 
	   this._data['wo']=dop;

  
 //  (setTimeout(function(){ dataURL=canvas.toDataURL();p++;}, 50)).then;

//var prom=delay(50).then(function(dataURL){return canvas.toDataURL();})
//console.log(prom);
 // this._data['url']=
 //console.log(f1(canvas));
  


  this._data['ho']+=this._data['ho']/2;


	//mal(dataURL);







function rs(canvas) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(canvas.toDataURL());
    }, 50);
  });
}

async function f1(canvas,url) {
  const x = await rs(canvas);
 url=x;
  var url=x;
  return url; // 10
}



		
	
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	//mal(dataURL);
	
	
	
	
	
	
	
	
	 function wypis(item ,f,ur,wo,ho,skala)
	{
		
		console.log(item);
		if(item.indexOf(".png")>-1)
		{
		var t=item.substring(0,item.length-4);
		t=parseInt(t);
		
		
		var ii=f.indexOf(t);
		
		 
		 
		
	
	


  
  var pip=dop;

if(skala==15)
dop+=wo[ii]/2;
else	
dop+=wo[ii];
 var wh,o,ww,y;
	
	if(skala==15)
	{	 wh=ho[ii]/2;
	 o=wo[ii]/2;
	 y=15-wh;
	 if(wh>15)
		 y=3;
	}
	else{
		 wh=ho[ii];
		y=45-wh; 
	o=wo[ii];
	}
	var img=new Image();
	img.src=ur[ii];
	
	 img.onload = function () { 
   
	ctx.drawImage(img,0,0,wo[ii],ho[ii], pip,y, o,wh);
	
	 }
//var t=await mm(ur[ii],pip,y,o,wh);


	
	
//function mm(url,pip,y,o,wh)	
//{ 
 
 //var img = new Image();
//img.src =url;


}			
	
		
		
		else{
		
		var dl=item.length*19;
		var y;
		if(skala==15)
		{dl=dl/2;
	y=15;}
	else{y=45}
		
		ctx.font=skala+"px Arial";
ctx.fillText(item,dop,y);

	dop+=dl;}
 }	
}
	
	
	
	
	
}


class Podloga{
	
constructor(){
	this._data = {
			
			id: '',
			rodzaj: '',
		wnetrze: '',
		dol:'',
		gora:'',
		funkcje:'',
		plik: '',
	url:'',
		taburl:[],
		tabwo:[],
		tabho:[],
		wo:'',
		ho:'',
		
		
			
					
		};
	}

   
	   
	  	   ustawdane(id,rodzaj,wnetrze,funkcje,turl,two,tho) {
				this._data['id'] = id;
		this._data['rodzaj'] = rodzaj;
		
	   var kindx=wnetrze.indexOf(']');
	   var wnetrze1=wnetrze.substring(1,kindx);
 this._data['gora']=wnetrze1.split('$');
 
var wnetrze2=wnetrze.substring(kindx+2,wnetrze.length-1);
 this._data['dol']=wnetrze2.split('$');
 
  this._data['funkcje']=funkcje;
  
 this._data['taburl']=turl;
	  this._data['tabwo']=two;
	   this._data['tabho']=tho;
	this._data['ho']=Math.max(30,...tho);
	
	}
	
		ustawurl(url)
	{
	
	this._data['url']=url;
	}
	
	
	maketext(ctx,canvas){
		var dop=0; 

	
	this._data['gora'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho'],30));

	var dataURL=canvas.toDataURL();
var pop=dop;

this._data['dol'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho'],15));
  
	   this._data['wo']=dop;
	   this._data['ho']=this._data['ho']+1/2*this._data['ho'];
   var dataURL2=canvas.toDataURL();
	console.log(dataURL,dataURL2);
	//mal(dataURL);
	
	
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	//mal(dataURL);
	
	
	
	
	
	
	
	
	function wypis(item ,f,ur,wo,ho,skala)
	{
		
		
		if(item.indexOf(".png")>-1)
		{
		var t=item.substring(0,item.length-4);
		t=parseInt(t);
		
		
		var ii=f.indexOf(t);
		
		 
		 
		
	
	var img = new Image();

console.log(ur[ii]);

  img.src =ur[ii];
  var pip=dop;

if(skala==15)
dop+=wo[ii]/2;
else	
dop+=wo[ii];
 var wh,o,ww,y;
	
	if(skala==15)
	{	 wh=ho[ii]/2;
	 o=wo[ii]/2;
	 y=45-wh;
	}
	else{
		 wh=ho[ii];
		 o=wo[ii];
		y=30-wh; 
		if(wh>30)
			y=3;
	o=wo[ii];
		
	}

  img.onload = function () { 
   
console.log("taaaak");	
	ctx.drawImage(img,0,0,wo[ii],ho[ii], pip,y, o,wh);
	


}

			
	
	}
		else{
		
		var dl=item.length*19;
		var y;
		if(skala==15)
		{dl=dl/2;
	y=45;}
	else{y=30}
		
		ctx.font=skala+"px Arial";
ctx.fillText(item,dop,y);
	dop+=dl;}
 }	
}
	
	
	
	
	
}



 class Calosc{
	
constructor(){
	this._data = {
			
			id: '',
			rodzaj: '',
		wnetrze: '',
		
		gora:'',
		funkcje:'',
		plik: '',
	url:'',
		taburl:[],
		tabwo:[],
		tabho:[],
		wo:'',
		ho:'',
		
		
			
					
		};
	}

   
	   
	  	 
   
	   ustawdane(id,rodzaj,wnetrze1,funkcje,turl,two,tho) {
				this._data['id'] = id;
		this._data['rodzaj'] = rodzaj;
		
   wnetrze1=wnetrze1.substring(1,wnetrze1.length-1);
  if(wnetrze1.length>2)
    this._data['wnetrze']=wnetrze1;
  this._data['funkcje']=funkcje;
 console.log(wnetrze1);

    this._data['cz']=wnetrze1.split('$');
	 this._data['taburl']=turl;
	  this._data['tabwo']=two;
	   this._data['tabho']=tho;
	this._data['ho']=Math.max(30,...tho);
	
	}
	
	
	
		ustawurl(url)
	{
	
	this._data['url']=url;
	}
	
	
	maketext(ctx,canvas){
		
		
	
		


		var hop=this._data['ho'];
		
		var dop=0; 

	
	this._data['gora'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho'],30));

	var dataURL=canvas.toDataURL();

  this._data['ho']=hop;
	   this._data['wo']=dop;
	   
  // var dataURL2=canvas.toDataURL();
	//console.log(dataURL,dataURL2);
	//mal(dataURL);
	
	
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	//mal(dataURL);
	
	
	
	
	
	
	
	
	function wypis(item ,f,ur,wo,ho,skala)
	{
		
		
		if(item.indexOf(".png")>-1)
		{
		var t=item.substring(0,item.length-4);
		t=parseInt(t);
		
		
		var ii=f.indexOf(t);
		
		 
		 
		
	
	var img = new Image();


  img.src =ur[ii];
  var pip=dop;




if(skala==15)
dop+=wo[ii]/2;
else	
dop+=wo[ii];
	var y1,wh1;
	
	if(skala==15)
	{	 wh1=ho[ii]/2;
	
	 y1=45-wh1;
	}
	else{
		 wh1=ho[ii];
		y1=30-wh1; 
	
		
	}
	if(y1+wh1>hop)
	hop=y1+wh1;

  img.onload = function () { 
    var wh,o,ww,y;
	
	if(skala==15)
	{	 wh=ho[ii]/2;
	 o=wo[ii]/2;
	 y=45-wh;
	}
	else{
		 wh=ho[ii];
		y=30-wh; 
	o=wo[ii];
		
	}
	ctx.drawImage(img, pip,y, o,wh);
console.log("taaaak");	


}

			
	
	}
		else{
		
		var dl=item.length*19;
		var y;
		if(skala==15)
		{dl=dl/2;
	y=45;}
	else{y=30}
		
		ctx.font=skala+"px Arial";
ctx.fillText(item,dop,y);
	dop+=dl;
	if(y>hop)
		hop=y+5;
	}
 }	
}
	
	
	
	
	
}

 class Logarytm{
	
constructor(){
	this._data = {
			
			id: '',
			rodzaj: '',
		wnetrze: '',
		podstawa:'',
		liczba:'',
		funkcje:'',
		plik: '',
	url:'',
		taburl:[],
		tabwo:[],
		tabho:[],
		wo:'',
		ho:'',
		
		
			
					
		};
	}

   
	   
	  	   ustawdane(id,rodzaj,wnetrze,funkcje,turl,two,tho) {
				this._data['id'] = id;
		this._data['rodzaj'] = rodzaj;
		
	   var kindx=wnetrze.indexOf(']');
	   var wnetrze1=wnetrze.substring(1,kindx);
 this._data['podstawa']=wnetrze1.split('$');
 
var wnetrze2=wnetrze.substring(kindx+2,wnetrze.length-1);
 this._data['liczba']=wnetrze2.split('$');
 
  this._data['funkcje']=funkcje;
  
 this._data['taburl']=turl;
	  this._data['tabwo']=two;
	   this._data['tabho']=tho;
	this._data['ho']=Math.max(30,...tho);
	
	}
	ustawurl(url)
	{
	
	this._data['url']=url;
	}
	
	maketext(ctx,canvas){
		
		
	
		


		
		
		var dop=40; 
ctx.font="30px Arial";
ctx.fillText("log",0,30);
	
	this._data['podstawa'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho'],15));

	var dataURL=canvas.toDataURL();
var pop=dop;

this._data['liczba'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho'],30));
  
	   this._data['wo']=dop;
   var dataURL2=canvas.toDataURL();
	console.log(dataURL,dataURL2);
	//mal(dataURL);
	
	
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	//mal(dataURL);
	
	
	
	
	
	
	
	
	function wypis(item ,f,ur,wo,ho,skala)
	{
		
		
		if(item.indexOf(".png")>-1)
		{
		var t=item.substring(0,item.length-4);
		t=parseInt(t);
		
		
		var ii=f.indexOf(t);
		
		 
		 
		
	
	var img = new Image();


  img.src =ur[ii];
  var pip=dop;

if(skala==15)
dop+=wo[ii]/2;
else	
dop+=wo[ii];
  img.onload = function () { 
    var wh,o,ww,y;
	
	if(skala==15)
	{	 wh=ho[ii]/2;
	 o=wo[ii]/2;
	 y=45-wh;
	}
	else{
		 wh=ho[ii];
		y=30-wh; 
		if(wh>30)
			y=3;
	o=wo[ii];
		
	}
	ctx.drawImage(img,0,0,wo[ii],ho[ii],pip,y, o,wh);
	


}

			
	
	}
		else{
		
		var dl=item.length*19;
		var y;
		if(skala==15)
		{dl=dl/2;
	y=45;}
	else{y=30}
		
		ctx.font=skala+"px Arial";
ctx.fillText(item,dop,y);
	dop+=dl;}
 }	
}
	
	
	
	
	
}






 class Ulamek{
	constructor() {
	this._data = {
			
			id: '',
			rodzaj: '',
		wnetrze: '',
		dol:'',
		gora:'',
		funkcje:'',
		plik: '',
		url:'',
		taburl:[],
		tabwo:[],
		tabho:[],
		wo:'',
		ho:'',
		
			
					
		};
	}

   
	   
	   ustawdane(id,rodzaj,wnetrze,funkcje,turl,two,tho) {
				this._data['id'] = id;
		this._data['rodzaj'] = rodzaj;
		
	   var kindx=wnetrze.indexOf(']');
	   var wnetrze1=wnetrze.substring(1,kindx);
 this._data['gora']=wnetrze1.split('$');
 
var wnetrze2=wnetrze.substring(kindx+2,wnetrze.length-1);
 this._data['dol']=wnetrze2.split('$');
 
  this._data['funkcje']=funkcje;
    this._data['plik']="ulamek.png";

 this._data['taburl']=turl;
	  this._data['tabwo']=two;
	   this._data['tabho']=tho;
	this._data['ho']=Math.max(30,...tho);


	
	}
	
ustawurl(url)
	{
	console.log("pierogi");
	console.log(url);
	
	this._data['url']=url;
	}
	
	 maketext(ctx,canvas){
		
		
	
		function mal(URL){
		
//const image = new Image();
//const image2 = new Image();
//const image3 = new Image();




let ur="data:image/png;base64,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";

dra(ur,0,0,300,50);
dra2(URL,50,0,200,100);
function dra(url,x,y,wx,wy ) {
  var img = new Image();
  img.src = url;
  img.onload = function () { 
    ctx.drawImage(img, x, y,wx,wy);
}}
  
  
function dra2(url,x,y,wx,wy ) {
  var img = new Image();
  img.src = url
  img.onload = function () { 
    ctx.drawImage(img,0,0,300,60, x, y,wx,wy);
}}
  


  
  
  
}


		
		
		var dop=0; 

	
	this._data['gora'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho'],this._data['ho'],"gora"));

	var dataURL=canvas.toDataURL();
var pop=dop;
dop=0;
this._data['dol'].forEach(e=>wypis(e,this._data['funkcje'],this._data['taburl'],this._data['tabwo'],this._data['tabho'],this._data['ho'],"dol"));
   if(pop>dop)
	this._data['wo']=pop;
   else
	   this._data['wo']=dop;
   ctx.strokeStyle="#000"	;
   ctx.beginPath();
ctx.moveTo(0, this._data['ho']+2);
ctx.lineTo( this._data['wo'], this._data['ho']+2);
ctx.stroke();
   
   this._data['ho']=2*this._data['ho']+7;
   
   var dataURL2=canvas.toDataURL();
	console.log(dataURL,dataURL2);
	//mal(dataURL);
	
	
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	
	//mal(dataURL);
	
	
	
	
	
	
	
	
	function wypis(item ,f,ur,wo,ho,wysokosc,poz)
	{
		
		
		if(item.indexOf(".png")>-1)
		{
		var t=item.substring(0,item.length-4);
		t=parseInt(t);
		
		
		var ii=f.indexOf(t);
		
		 
		 
		
	
	var img = new Image();


  img.src =ur[ii];
  var pip=dop;


dop+=wo[ii];
  img.onload = function () { 
   if(poz=="gora")
   ctx.drawImage(img, pip, wysokosc-ho[ii]);
	else
	ctx.drawImage(img, pip, 2*wysokosc-ho[ii]+5);	


}

			
	
	}
		else{
		
		var dl=item.length*20;
		ctx.font="30px Arial";
if(poz=="gora")
ctx.fillText(item,dop,wysokosc);
	else{
ctx.fillText(item,dop,2*wysokosc+5);		
		
	}
	
	dop+=dl;}
 }	
}
	
	
	
	
	
	
	
	
}
function rendering()
{
	
	var str=tekst.value;
//"abcd{beta$}"
//"22{ulamek$[{podloga$[abc][{beta$}24{ulamek$[259][11]}]}][{potega$[234{odu$}][{ulamek$[24][79]}]}]}{odu$}245D";
//	"{potega$[245][{potega$[22][12]}]}"
//"{potega$[abd{alfa$}][ad{beta$}{odu$}]}";
//"20{podloga$[ab{alfa$}{odu$}][23x{beta$}{odu$}]}"
//	"{logarytm$[poi][cd{odu$}]}";
//	"{ulamek$[av{podloga$[abcd{alfa$}kokoko][bb{beta$}]}{potega$[2d{beta$}][22b]}][{potega$[2d{beta$}][22b]}]}";
//	"{pierwiastek$[{pierwiastek$[20{pierwiastek$[{podloga$[bbb{beta$}{odu$}][234]}]}{odu$}]}]}";
	//abd2{beta$}]}";
//	"{pierwiastek$[{ulamek$[bbb{beta$}{odu$}][234]}]}{odu$}";
//	"{podloga$[259][dd84{beta$}]}";
//
	//"{potega$[abc][{potega$[24][3]}]}"

//	"{ulamek$[{pierwiastek$[27]}][54]}";
//"{podloga$[abc][221]}{podloga$[23][18]}";
//	"{pierwiastek$[245]} ";
	//"{ulamek$[{podloga$[Bda{beta$}][247{alfa$}]}][{potega$[dodo][21{odu$}]}]}";
//	"{potega$[245][dd{beta$}]}";
//"{pierwiastek$[ABC{alfa$}123{kat$}{sigma$}{podloga$[abb][24]}]}";
str="{calosc$["+str+"]}";	
const funkcje=[];
const tabfunkcji=[];	
ctx.width=screen.width;

ctx.height=200;
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
String.prototype.replaceAt = function(index,ind2, replacement)
{    return this.substring(0, index) + replacement + this.substring(ind2 , this.length);
}

ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

var tablicaobiektów=[];
async function wylapfun(str){
	var id=0;
	var tap=[];
	var tapp=[];
	var tapd=[];
	var tapid=[];
	var tapidk=[];
	var fun=[];
	var sklad=[];
	var dl=[];
	
	var tabwnet=[];
	
	for(var i=0;i<str.length;i++)
		{
			
			
			if(str[i]=='{' )
			{
				tap.push(i);
				tapid.push(id);
				id++;
			}
				if(str[i]=='$' )
			{
				tapd.push(i);
				
			}
			if(str[i]=='}')
			{
				tapidk.push(tapid[tapid.length-1]);
				tapp.push(tap[tap.length-1]);
				tapp.push(tapd[tapd.length-1]);
				tapid.pop();
		tap.pop();
		tapd.pop();
				tapp.push(i);
				
			}
			
		}
		tap=tapp;
		
		for(i=0;i<tap.length;i=i+3)
		{
			var funct=str.substring(tap[i]+1,tap[i+1]);
			fun.push(funct);
			var reszt=str.substring(tap[i+1]+1,tap[i+2]);
			sklad.push(reszt);
			dl.push(tap[i+2]-tap[i]);
			
			
		}
	console.log(tapidk);
	console.log(fun);
console.log(sklad);	
	var tb=funkcjawfunkcji(tapidk);
	
	console.log(tb);
//zamiana wnetrza na id 




for(i=0;i<sklad.length;i++)
{  var  k=tb[i].length;
       var j=0;
var wne=sklad[i];
	if(k<1)
		tabwnet.push(sklad[i]);
	else
	{while(j<k)
		{
			
		 var indeks=wne.indexOf("{");
		 var funi=tb[i][j];
		
		 var ini=tapidk.indexOf(funi);
		 console.log(ini);
		 var dlo=dl[ini];
         //wne.replaceAt(indeks)		 
	
		  wne=wne.replaceAt(indeks,indeks+dlo+1,"$"+funi +".png$");
		
		 
		 j++;

		 
			
		}
     tabwnet.push(wne);



	}	}	
	 console.log(tabwnet);
	
	
	for(i=0;i<tapidk.length;i++)
	{
		
		
		var rodzaj=fun[i];
		
		
		
		
	var obiekt;	
		switch (rodzaj) {
			case "calosc":
			    console.log(tabwnet);
	obiekt=new Pierwiastek();
	var taburl=[];
	var tabwo=[];
	var tabho=[];
	for(var j=0;j<tb[i].length;j++)
	{
		let ik=tapidk.indexOf(tb[i][j]);
	

	var ob=tablicaobiektów[ik];

	console.log(ob);
	taburl.push(ob._data['url']);
	tabwo.push(ob._data['wo']);
    tabho.push(ob._data['ho']);	
	}
	console.log(taburl);
	obiekt.ustawdane(tapidk[i],fun[i],tabwnet[i],tb[i],taburl,tabwo,tabho);
	
	
	obiekt.maketext(ctx,canvas);
	await sleep(100);
	obiekt.ustawurl(canvas.toDataURL());
	
	
	tablicaobiektów.push(obiekt);
	
	var snapshot;
	
	snapshot=ctx.getImageData(0,0,obiekt._data['wo']+5,obiekt._data['ho']+10);
  console.log(canvas.toDataURL());

	ctx.clearRect(0, 0, ctx.canvas.width,ctx.canvas.height );
   ctx.canvas.width=obiekt._data['wo']+20;
	ctx.canvas.height=obiekt._data['ho']+10;


   ctx.putImageData(snapshot,0,0);
	
	
	break;
			
			
  case "pierwiastek":
    console.log(tabwnet);
	obiekt=new Pierwiastek();
	var taburl=[];
	var tabwo=[];
	var tabho=[];
	for(var j=0;j<tb[i].length;j++)
	{
		let ik=tapidk.indexOf(tb[i][j]);
	

	var ob=tablicaobiektów[ik];
	console.log("kornik");
	console.log(ob);
	taburl.push(ob._data['url']);
	tabwo.push(ob._data['wo']);
    tabho.push(ob._data['ho']);	
	}
	console.log(taburl);
	obiekt.ustawdane(tapidk[i],fun[i],tabwnet[i],tb[i],taburl,tabwo,tabho);
	
	
	obiekt.maketext(ctx,canvas);
	await sleep(50);
	obiekt.ustawurl(canvas.toDataURL());
ctx.clearRect(0,0,600,400);		
	obiekt.dopierwiastka(ctx);
	await sleep(50);
	obiekt.ustawurl(canvas.toDataURL());
ctx.clearRect(0,0,600,400);	
	tablicaobiektów.push(obiekt);
	
	break;
   case "ulamek":
    obiekt=new Ulamek();
	
	var taburl=[];
	var tabwo=[];
	var tabho=[];
	for(var j=0;j<tb[i].length;j++)
	{
		let ik=tapidk.indexOf(tb[i][j]);
	

	var ob=tablicaobiektów[ik];
	taburl.push(ob._data['url']);
	tabwo.push(ob._data['wo']);
    tabho.push(ob._data['ho']);	
	}

	obiekt.ustawdane(tapidk[i],fun[i],tabwnet[i],tb[i],taburl,tabwo,tabho);
	console.log(obiekt);
	obiekt.maketext(ctx,canvas);
	await sleep(70);
	obiekt.ustawurl(canvas.toDataURL());
    ctx.clearRect(0,0,600,400);	
	tablicaobiektów.push(obiekt);
	break;
	case "potega":
	 obiekt=new Potega();
	var taburl=[];
	var tabwo=[];
	var tabho=[];
	for(var j=0;j<tb[i].length;j++)
	{
		let ik=tapidk.indexOf(tb[i][j]);
	

	var ob=tablicaobiektów[ik];
	taburl.push(ob._data['url']);
	tabwo.push(ob._data['wo']);
    tabho.push(ob._data['ho']);	
	}

	obiekt.ustawdane(tapidk[i],fun[i],tabwnet[i],tb[i],taburl,tabwo,tabho);
    
	console.log(obiekt);
	obiekt.maketext(ctx,canvas);

	//var p=await adurl();
await sleep(50);

	function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
	//console.log("popopop"+);
	obiekt.ustawurl(canvas.toDataURL());
	tablicaobiektów.push(obiekt);
		ctx.clearRect(0,0,600,400);
//	async function adurl(){
	//setTimeout(function(){ obiekt.ustawurl();tablicaobiektów.push(obiekt);return 1 }, 50);
	//}

	break
	case "podloga":
	 obiekt=new Podloga();
	var taburl=[];
	var tabwo=[];
	var tabho=[];
	for(var j=0;j<tb[i].length;j++)
	{
		let ik=tapidk.indexOf(tb[i][j]);
	

	var ob=tablicaobiektów[ik];
	taburl.push(ob._data['url']);
	tabwo.push(ob._data['wo']);
    tabho.push(ob._data['ho']);	
	}

	obiekt.ustawdane(tapidk[i],fun[i],tabwnet[i],tb[i],taburl,tabwo,tabho);

	obiekt.maketext(ctx,canvas);
	
await sleep(50);

	//console.log("popopop"+);
	obiekt.ustawurl(canvas.toDataURL());

	ctx.clearRect(0,0,600,400);
	tablicaobiektów.push(obiekt);	
	
	
	
	break;
	case "logarytm":
	 obiekt=new Logarytm();
	var taburl=[];
	var tabwo=[];
	var tabho=[];
	for(var j=0;j<tb[i].length;j++)
	{
		let ik=tapidk.indexOf(tb[i][j]);
	

	var ob=tablicaobiektów[ik];
	taburl.push(ob._data['url']);
	tabwo.push(ob._data['wo']);
    tabho.push(ob._data['ho']);	
	}

	obiekt.ustawdane(tapidk[i],fun[i],tabwnet[i],tb[i],taburl,tabwo,tabho);
	console.log(obiekt);
	obiekt.maketext(ctx,canvas);
	await sleep(50);

	//console.log("popopop"+);
	obiekt.ustawurl(canvas.toDataURL());
	
		tablicaobiektów.push(obiekt);
		ctx.clearRect(0,0,600,400);
	break;
	
	default:
	obiekt=new Funkcja();
  
	obiekt.ustawdane(tapidk[i],fun[i]);
	
	tablicaobiektów.push(obiekt);
	break;
	}
		
		
		
		
		
		
	}
	
	





	for(i=0;i<tapid.length;i++)
	 {
//		 var f=new Funkcja();
	//	 f.ustaw(tapid[i],fun[i],sklad[i],tb[i]);
		 
		 
		 
	 }
	
	
}
	


function funkcjawfunkcji(tab)
{
	var funin=[];
	for(var i=0;i<tab.length;i++)
	{
	 var t=[];
	for(var j=0;j<i;j++)
	{
	if(tab[j]>tab[i])
	{	
if(tab[j]<t[t.length-1])
	t.pop();
t.push(tab[j])


	}
		
	}

	
	if(t.length>0){
  var tt=t;

  for(var p=0;p<t.length;p++)
  {
	  for(var b=0;b<funin.length;b++){
let indo=funin[b].indexOf(t[p]);

if(indo!=-1){
	tt[p]="n";
	//t.splice(p,1);	
}

	}}
t=[];	
	for(var g=0;g<tt.length;g++)
	{
		if(tt[g]!="n")
			t.push(tt[g]);
	}}
	funin.push(t);
	
	}
	
	
	return funin;
	
}


wylapfun(str);






	
}

function download(){


  let a = document.createElement("a");
  a.href = canvas.toDataURL();
  console.log(canvas.toDataURL())
var data = new Date(); 
 var filename="image"+data+".png";
  a.download = filename;
  a.dispatchEvent(new MouseEvent("click"));
}

function impor(){
	var data = new Date();
console.log(data);
	console.log(screen.width)
	
	
}