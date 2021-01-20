window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","Hall":"resource/scene/root_hall.exml","Login":"resource/scene/login.exml","Ground":"resource/scene/Ground.exml","Battle":"resource/scene/battle.exml","Lose":"resource/scene/lose.exml","Pregame":"resource/scene/Pregame.exml","Win":"resource/scene/win.exml","Recharge":"resource/scene/recharge.exml","Cash":"resource/scene/cash.exml","MatchEnd":"resource/scene/matchEnd.exml","Room":"resource/scene/room.exml","Record":"resource/scene/record.exml","RecordItem":"resource/scene/recordItem.exml","Zhuangjia":"resource/scene/niuniu/zhuangjia.exml","CardGroup":"resource/scene/niuniu/cardGroup.exml","NiuniuBattle":"resource/scene/niuniu/niuniuBattle.exml","NiuniuGround":"resource/scene/niuniu/bottom_score.exml","NiuniuLoadingView":"resource/scene/niuniu/qznn_loading.exml","BairenNiuniuGround":"resource/scene/BRNN/brnn_select.exml","BairenNiuniuBattle":"resource/scene/BRNN/BRNN_Battle.exml","HeadGroup":"resource/scene/BRNN/headGroup.exml","RankHeadGroup":"resource/scene/BRNN/rankHeadGroup.exml","DoorGroup":"resource/scene/BRNN/doorGroup.exml","BairenCardGroup":"resource/scene/BRNN/brCardGroup.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/scene/battle.exml'] = window.battleStage = (function (_super) {
	__extends(battleStage, _super);
	var battleStage$Skin1 = 	(function (_super) {
		__extends(battleStage$Skin1, _super);
		function battleStage$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battleStage$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kaiju_json.New_btn_chupai";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin1;
	})(eui.Skin);

	var battleStage$Skin2 = 	(function (_super) {
		__extends(battleStage$Skin2, _super);
		function battleStage$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","play_btn_gray_png")
					])
			];
		}
		var _proto = battleStage$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "kaiju_json.New_btn_tishi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin2;
	})(eui.Skin);

	var battleStage$Skin3 = 	(function (_super) {
		__extends(battleStage$Skin3, _super);
		function battleStage$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battleStage$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kaiju_json.New_要不起";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin3;
	})(eui.Skin);

	var battleStage$Skin4 = 	(function (_super) {
		__extends(battleStage$Skin4, _super);
		function battleStage$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battleStage$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kaiju_json.New_btn_3";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin4;
	})(eui.Skin);

	var battleStage$Skin5 = 	(function (_super) {
		__extends(battleStage$Skin5, _super);
		function battleStage$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battleStage$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kaiju_json.New_btn_2";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin5;
	})(eui.Skin);

	var battleStage$Skin6 = 	(function (_super) {
		__extends(battleStage$Skin6, _super);
		function battleStage$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battleStage$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kaiju_json.New_btn_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin6;
	})(eui.Skin);

	var battleStage$Skin7 = 	(function (_super) {
		__extends(battleStage$Skin7, _super);
		function battleStage$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battleStage$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kaiju_json.New_btn_bujiao";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin7;
	})(eui.Skin);

	var battleStage$Skin8 = 	(function (_super) {
		__extends(battleStage$Skin8, _super);
		function battleStage$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","music_btn_close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battleStage$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "music_btn_open_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin8;
	})(eui.Skin);

	var battleStage$Skin9 = 	(function (_super) {
		__extends(battleStage$Skin9, _super);
		function battleStage$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","sound_btn_close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battleStage$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "sound_btn_open_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin9;
	})(eui.Skin);

	var battleStage$Skin10 = 	(function (_super) {
		__extends(battleStage$Skin10, _super);
		function battleStage$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = battleStage$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "kaiju_json.New_消息";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return battleStage$Skin10;
	})(eui.Skin);

	function battleStage() {
		_super.call(this);
		this.skinParts = ["left_head_img","right_head_img","zhuozi","left_time_txt","left_clock","right_time_txt","right_clock","my_time_txt","my_clock","my_head_img","play_btn","tip_btn","pass_btn","score3_btn","score2_btn","score1_btn","no_btn","bujiabei_btn","jiabei_btn","btn_group","left_num_txt","left_num_box","right_num_txt","right_num_box","left_pass","right_pass","my_pass","my_talk_txt","my_talk","left_talk_txt","left_talk","right_talk_txt","right_talk","talk_bg","item_0","item_1","item_2","item_3","item_4","item_5","item_6","item_7","talk_group","talk_scroller","music_btn","snd_btn","left_name_txt","left_name_box","right_name_txt","right_name_box","my_name_txt","my_name_box","return_btn","tuoguan_btn","card_1","card_2","card_3","top_box","talk_btn","ekt_txt0","gold","ekt_txt1","diamond","difen_txt","beishu_txt","moshi_txt","bottom_bar","call_txt","left_call_txt","right_call_txt"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.left_head_img_i(),this.right_head_img_i(),this.zhuozi_i(),this.left_clock_i(),this.right_clock_i(),this.my_clock_i(),this.my_head_img_i(),this.btn_group_i(),this.left_num_box_i(),this.right_num_box_i(),this.left_pass_i(),this.right_pass_i(),this.my_pass_i(),this.my_talk_i(),this.left_talk_i(),this.right_talk_i(),this.talk_bg_i(),this.talk_scroller_i(),this.music_btn_i(),this.snd_btn_i(),this.left_name_box_i(),this.right_name_box_i(),this.my_name_box_i(),this.top_box_i(),this.bottom_bar_i(),this.call_txt_i(),this.left_call_txt_i(),this.right_call_txt_i()];
	}
	var _proto = battleStage.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "kaiju_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.left_head_img_i = function () {
		var t = new eui.Image();
		this.left_head_img = t;
		t.height = 452;
		t.source = "kaiju_json.man_head";
		t.width = 215;
		t.x = 174;
		t.y = 87;
		return t;
	};
	_proto.right_head_img_i = function () {
		var t = new eui.Image();
		this.right_head_img = t;
		t.anchorOffsetX = 110;
		t.anchorOffsetY = 224;
		t.height = 448;
		t.scaleX = -1;
		t.source = "kaiju_json.man_head";
		t.width = 221;
		t.x = 1628;
		t.y = 311;
		return t;
	};
	_proto.zhuozi_i = function () {
		var t = new eui.Image();
		this.zhuozi = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "kaiju_json.New_桌子";
		return t;
	};
	_proto.left_clock_i = function () {
		var t = new eui.Group();
		this.left_clock = t;
		t.visible = false;
		t.x = 386;
		t.y = 258;
		t.elementsContent = [this._Image2_i(),this.left_time_txt_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "kaiju_json.New_闹钟";
		t.width = 110;
		t.y = 0;
		return t;
	};
	_proto.left_time_txt_i = function () {
		var t = new eui.Label();
		this.left_time_txt = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFF0000;
		t.verticalAlign = "middle";
		t.verticalCenter = 4.5;
		t.width = 110;
		return t;
	};
	_proto.right_clock_i = function () {
		var t = new eui.Group();
		this.right_clock = t;
		t.visible = false;
		t.width = 110;
		t.x = 1429;
		t.y = 242;
		t.elementsContent = [this._Image3_i(),this.right_time_txt_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "kaiju_json.New_闹钟";
		t.width = 110;
		t.y = 16.72;
		return t;
	};
	_proto.right_time_txt_i = function () {
		var t = new eui.Label();
		this.right_time_txt = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 66.6;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xFF0000;
		t.verticalAlign = "middle";
		t.width = 110;
		t.y = 42.11;
		return t;
	};
	_proto.my_clock_i = function () {
		var t = new eui.Group();
		this.my_clock = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = -12;
		t.visible = false;
		t.width = 110;
		t.y = 540;
		t.elementsContent = [this._Image4_i(),this.my_time_txt_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110;
		t.horizontalCenter = 0;
		t.source = "kaiju_json.New_闹钟";
		t.width = 110;
		t.y = 6.08;
		return t;
	};
	_proto.my_time_txt_i = function () {
		var t = new eui.Label();
		this.my_time_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 63.79;
		t.horizontalCenter = -1;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xff0000;
		t.verticalAlign = "middle";
		t.width = 73.64;
		t.y = 32.9;
		return t;
	};
	_proto.my_head_img_i = function () {
		var t = new eui.Image();
		this.my_head_img = t;
		t.height = 452;
		t.horizontalCenter = -806.5;
		t.source = "kaiju_json.man_head";
		t.width = 215;
		t.y = 547;
		return t;
	};
	_proto.btn_group_i = function () {
		var t = new eui.Group();
		this.btn_group = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.width = 1329.92;
		t.y = 534.98;
		t.elementsContent = [this.play_btn_i(),this.tip_btn_i(),this.pass_btn_i(),this.score3_btn_i(),this.score2_btn_i(),this.score1_btn_i(),this.no_btn_i(),this.bujiabei_btn_i(),this.jiabei_btn_i()];
		return t;
	};
	_proto.play_btn_i = function () {
		var t = new eui.Button();
		this.play_btn = t;
		t.enabled = true;
		t.height = 80;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 198;
		t.x = 950;
		t.y = 30;
		t.skinName = battleStage$Skin1;
		return t;
	};
	_proto.tip_btn_i = function () {
		var t = new eui.Button();
		this.tip_btn = t;
		t.enabled = true;
		t.height = 80;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 198;
		t.x = 710;
		t.y = 30;
		t.skinName = battleStage$Skin2;
		return t;
	};
	_proto.pass_btn_i = function () {
		var t = new eui.Button();
		this.pass_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.cacheAsBitmap = false;
		t.height = 80;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 198;
		t.x = 395.92;
		t.y = 30;
		t.skinName = battleStage$Skin3;
		return t;
	};
	_proto.score3_btn_i = function () {
		var t = new eui.Button();
		this.score3_btn = t;
		t.height = 80;
		t.label = "";
		t.name = "3";
		t.visible = false;
		t.width = 198;
		t.x = 954;
		t.y = 30;
		t.skinName = battleStage$Skin4;
		return t;
	};
	_proto.score2_btn_i = function () {
		var t = new eui.Button();
		this.score2_btn = t;
		t.height = 80;
		t.label = "";
		t.name = "2";
		t.visible = false;
		t.width = 198;
		t.x = 710.64;
		t.y = 30;
		t.skinName = battleStage$Skin5;
		return t;
	};
	_proto.score1_btn_i = function () {
		var t = new eui.Button();
		this.score1_btn = t;
		t.height = 80;
		t.label = "";
		t.name = "1";
		t.visible = false;
		t.width = 198;
		t.x = 393.48;
		t.y = 30;
		t.skinName = battleStage$Skin6;
		return t;
	};
	_proto.no_btn_i = function () {
		var t = new eui.Button();
		this.no_btn = t;
		t.height = 80;
		t.label = "";
		t.name = "0";
		t.visible = false;
		t.width = 198;
		t.x = 152.42;
		t.y = 30;
		t.skinName = battleStage$Skin7;
		return t;
	};
	_proto.bujiabei_btn_i = function () {
		var t = new eui.Image();
		this.bujiabei_btn = t;
		t.name = "bujiabei";
		t.source = "kaiju_json.New_不加倍";
		t.visible = false;
		t.x = 720;
		t.y = 32;
		return t;
	};
	_proto.jiabei_btn_i = function () {
		var t = new eui.Image();
		this.jiabei_btn = t;
		t.name = "jiabei";
		t.source = "kaiju_json.New_加倍";
		t.visible = false;
		t.x = 969.12;
		t.y = 32.06;
		return t;
	};
	_proto.left_num_box_i = function () {
		var t = new eui.Group();
		this.left_num_box = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 95.52;
		t.visible = false;
		t.width = 69.34;
		t.x = 402.9;
		t.y = 383;
		t.elementsContent = [this._Image5_i(),this.left_num_txt_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kaiju_json.New_牌背";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.left_num_txt_i = function () {
		var t = new eui.Label();
		this.left_num_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0x1958a0;
		t.border = false;
		t.borderColor = 0xffffff;
		t.height = 88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "17";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 62;
		t.x = 8;
		t.y = 9;
		return t;
	};
	_proto.right_num_box_i = function () {
		var t = new eui.Group();
		this.right_num_box = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107.64;
		t.visible = false;
		t.width = 75.39;
		t.x = 1444.15;
		t.y = 383;
		t.elementsContent = [this._Image6_i(),this.right_num_txt_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "kaiju_json.New_牌背";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.right_num_txt_i = function () {
		var t = new eui.Label();
		this.right_num_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0x1958A0;
		t.border = false;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 40;
		t.text = "17";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 62;
		t.x = 8;
		t.y = 9;
		return t;
	};
	_proto.left_pass_i = function () {
		var t = new eui.Image();
		this.left_pass = t;
		t.height = 56;
		t.source = "pass_png";
		t.visible = false;
		t.width = 100;
		t.x = 406.22;
		t.y = 234;
		return t;
	};
	_proto.right_pass_i = function () {
		var t = new eui.Image();
		this.right_pass = t;
		t.height = 56;
		t.source = "pass_png";
		t.visible = false;
		t.width = 100;
		t.x = 1399.48;
		t.y = 234;
		return t;
	};
	_proto.my_pass_i = function () {
		var t = new eui.Image();
		this.my_pass = t;
		t.height = 56;
		t.horizontalCenter = -634;
		t.source = "pass_png";
		t.visible = false;
		t.width = 100;
		t.y = 617.71;
		return t;
	};
	_proto.my_talk_i = function () {
		var t = new eui.Group();
		this.my_talk = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.visible = false;
		t.width = 340;
		t.x = 30;
		t.y = 455;
		t.elementsContent = [this._Image7_i(),this.my_talk_txt_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "talk_box_left_png";
		t.width = 340;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.my_talk_txt_i = function () {
		var t = new eui.Label();
		this.my_talk_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 45;
		t.size = 24;
		t.text = "快点啊！等到花都谢了！";
		t.textColor = 0x040914;
		t.verticalAlign = "middle";
		t.width = 314;
		t.x = 20;
		t.y = 3;
		return t;
	};
	_proto.left_talk_i = function () {
		var t = new eui.Group();
		this.left_talk = t;
		t.height = 63;
		t.visible = false;
		t.width = 340;
		t.x = 114;
		t.y = 78;
		t.elementsContent = [this._Image8_i(),this.left_talk_txt_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "talk_box_left_png";
		t.width = 340;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.left_talk_txt_i = function () {
		var t = new eui.Label();
		this.left_talk_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 45;
		t.size = 24;
		t.text = "快点啊！等到花都谢了！";
		t.textColor = 0x040914;
		t.verticalAlign = "middle";
		t.width = 314;
		t.x = 20;
		t.y = 3;
		return t;
	};
	_proto.right_talk_i = function () {
		var t = new eui.Group();
		this.right_talk = t;
		t.height = 63;
		t.visible = false;
		t.width = 340;
		t.x = 877;
		t.y = 78;
		t.elementsContent = [this._Image9_i(),this.right_talk_txt_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "talk_box_right_png";
		t.width = 340;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.right_talk_txt_i = function () {
		var t = new eui.Label();
		this.right_talk_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 45;
		t.size = 24;
		t.text = "快点啊！等到花都谢了！";
		t.textColor = 0x040914;
		t.verticalAlign = "middle";
		t.width = 314;
		t.x = 20;
		t.y = 3;
		return t;
	};
	_proto.talk_bg_i = function () {
		var t = new eui.Rect();
		this.talk_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 0.9;
		t.fillColor = 0x162b64;
		t.height = 465;
		t.strokeAlpha = 0.9;
		t.strokeColor = 0x00b4ff;
		t.strokeWeight = 2;
		t.visible = false;
		t.width = 400;
		t.x = 900;
		t.y = 194;
		return t;
	};
	_proto.talk_scroller_i = function () {
		var t = new eui.Scroller();
		this.talk_scroller = t;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.visible = false;
		t.width = 400;
		t.x = 900;
		t.y = 201;
		t.viewport = this.talk_group_i();
		return t;
	};
	_proto.talk_group_i = function () {
		var t = new eui.Group();
		this.talk_group = t;
		t.anchorOffsetY = 0;
		t.height = 438;
		t.width = 400;
		t.x = 0;
		t.y = -4;
		t.elementsContent = [this.item_0_i(),this.item_1_i(),this.item_2_i(),this.item_3_i(),this.item_4_i(),this.item_5_i(),this.item_6_i(),this.item_7_i()];
		return t;
	};
	_proto.item_0_i = function () {
		var t = new eui.Label();
		this.item_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 90;
		t.name = "item_0";
		t.size = 24;
		t.text = "快点吧，等到花儿都谢了～";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 356;
		t.x = 30;
		t.y = 0;
		return t;
	};
	_proto.item_1_i = function () {
		var t = new eui.Label();
		this.item_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 90;
		t.name = "item_1";
		t.size = 24;
		t.text = "刚刚手抖了，不好意思哈！";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 362;
		t.x = 30;
		t.y = 90;
		return t;
	};
	_proto.item_2_i = function () {
		var t = new eui.Label();
		this.item_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 90;
		t.name = "item_2";
		t.size = 24;
		t.text = "你的牌打得也太好了！";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 360;
		t.x = 30;
		t.y = 180;
		return t;
	};
	_proto.item_3_i = function () {
		var t = new eui.Label();
		this.item_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 90;
		t.name = "item_3";
		t.size = 24;
		t.text = "这一手牌，有毒啊～～～";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 364;
		t.x = 30;
		t.y = 270;
		return t;
	};
	_proto.item_4_i = function () {
		var t = new eui.Label();
		this.item_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 90;
		t.name = "item_4";
		t.size = 24;
		t.text = "和你合作真的是太愉快了";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 362;
		t.x = 30;
		t.y = 360;
		return t;
	};
	_proto.item_5_i = function () {
		var t = new eui.Label();
		this.item_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 90;
		t.name = "item_5";
		t.size = 24;
		t.text = "不要走，我们决战到天亮";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 362;
		t.x = 30;
		t.y = 450;
		return t;
	};
	_proto.item_6_i = function () {
		var t = new eui.Label();
		this.item_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 90;
		t.name = "item_6";
		t.size = 24;
		t.text = "再见了，我会再回来的！";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 354;
		t.x = 30;
		t.y = 540;
		return t;
	};
	_proto.item_7_i = function () {
		var t = new eui.Label();
		this.item_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 90;
		t.name = "item_7";
		t.size = 24;
		t.text = "不好意思，我要离开一会儿";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 356;
		t.x = 30;
		t.y = 630;
		return t;
	};
	_proto.music_btn_i = function () {
		var t = new eui.CheckBox();
		this.music_btn = t;
		t.height = 58;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 58;
		t.x = 121.6;
		t.y = 30.7;
		t.skinName = battleStage$Skin8;
		return t;
	};
	_proto.snd_btn_i = function () {
		var t = new eui.CheckBox();
		this.snd_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 38.84;
		t.y = 30.7;
		t.skinName = battleStage$Skin9;
		return t;
	};
	_proto.left_name_box_i = function () {
		var t = new eui.Group();
		this.left_name_box = t;
		t.x = 181.58;
		t.y = 398.09;
		t.elementsContent = [this._Image10_i(),this.left_name_txt_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "kaiju_json.New_圆角矩形 1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.left_name_txt_i = function () {
		var t = new eui.Label();
		this.left_name_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.97;
		t.size = 30;
		t.text = "?";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 145.21;
		t.x = 22.76;
		t.y = 5.58;
		return t;
	};
	_proto.right_name_box_i = function () {
		var t = new eui.Group();
		this.right_name_box = t;
		t.x = 1537.04;
		t.y = 398.09;
		t.elementsContent = [this._Image11_i(),this.right_name_txt_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "kaiju_json.New_圆角矩形 1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.right_name_txt_i = function () {
		var t = new eui.Label();
		this.right_name_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.97;
		t.size = 30;
		t.text = "?";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 145.21;
		t.x = 22.76;
		t.y = 3.58;
		return t;
	};
	_proto.my_name_box_i = function () {
		var t = new eui.Group();
		this.my_name_box = t;
		t.visible = false;
		t.x = 274.32;
		t.y = 862.62;
		t.elementsContent = [this._Image12_i(),this.my_name_txt_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "kaiju_json.New_圆角矩形 1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.my_name_txt_i = function () {
		var t = new eui.Label();
		this.my_name_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.97;
		t.size = 30;
		t.text = "游客2342123";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 145.21;
		t.x = 22.76;
		t.y = 5.58;
		return t;
	};
	_proto.top_box_i = function () {
		var t = new eui.Group();
		this.top_box = t;
		t.visible = false;
		t.x = 618;
		t.y = 0;
		t.elementsContent = [this._Image13_i(),this.return_btn_i(),this.tuoguan_btn_i(),this.card_1_i(),this.card_2_i(),this.card_3_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "kaiju_json.New_顶部-底";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.return_btn_i = function () {
		var t = new eui.Image();
		this.return_btn = t;
		t.source = "kaiju_json.New_tuichu1";
		t.x = 39.24;
		t.y = 32.94;
		return t;
	};
	_proto.tuoguan_btn_i = function () {
		var t = new eui.Image();
		this.tuoguan_btn = t;
		t.source = "kaiju_json.New_tuoguan1";
		t.x = 564;
		t.y = 32.94;
		return t;
	};
	_proto.card_1_i = function () {
		var t = new eui.Image();
		this.card_1 = t;
		t.source = "kaiju_json.New_顶部牌";
		t.x = 153;
		t.y = 4;
		return t;
	};
	_proto.card_2_i = function () {
		var t = new eui.Image();
		this.card_2 = t;
		t.source = "kaiju_json.New_顶部牌";
		t.x = 278;
		t.y = 4;
		return t;
	};
	_proto.card_3_i = function () {
		var t = new eui.Image();
		this.card_3 = t;
		t.source = "kaiju_json.New_顶部牌";
		t.x = 401.1;
		t.y = 4;
		return t;
	};
	_proto.bottom_bar_i = function () {
		var t = new eui.Group();
		this.bottom_bar = t;
		t.x = 6;
		t.y = 993;
		t.elementsContent = [this._Image14_i(),this.talk_btn_i(),this.gold_i(),this.diamond_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this.difen_txt_i(),this.beishu_txt_i(),this.moshi_txt_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "kaiju_json.New_底部";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.talk_btn_i = function () {
		var t = new eui.Button();
		this.talk_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.label = "";
		t.width = 68;
		t.x = 1768.33;
		t.y = 10;
		t.skinName = battleStage$Skin10;
		return t;
	};
	_proto.gold_i = function () {
		var t = new eui.Group();
		this.gold = t;
		t.x = 65.52;
		t.y = 6;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this.ekt_txt0_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "kaiju_json.New_圆角矩形 5 拷贝";
		t.width = 272;
		t.x = 34;
		t.y = 2;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.source = "kaiju_json.New_金币";
		t.width = 75;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ekt_txt0_i = function () {
		var t = new eui.Label();
		this.ekt_txt0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.size = 35;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 103;
		t.x = 152;
		t.y = 12;
		return t;
	};
	_proto.diamond_i = function () {
		var t = new eui.Group();
		this.diamond = t;
		t.x = 462.64;
		t.y = 9;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this.ekt_txt1_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.source = "kaiju_json.New_圆角矩形 5 拷贝";
		t.width = 272;
		t.x = 34;
		t.y = 2;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "kaiju_json.New_钻石";
		t.width = 88;
		t.x = 0;
		t.y = -12.12;
		return t;
	};
	_proto.ekt_txt1_i = function () {
		var t = new eui.Label();
		this.ekt_txt1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.size = 36;
		t.text = "10";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 103;
		t.x = 152;
		t.y = 12;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "kaiju_json.New_底分：";
		t.x = 826.62;
		t.y = 15;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "kaiju_json.New_倍数：";
		t.x = 1134.25;
		t.y = 15;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "kaiju_json.New_模式：";
		t.x = 1404.48;
		t.y = 15;
		return t;
	};
	_proto.difen_txt_i = function () {
		var t = new eui.Label();
		this.difen_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.97;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 145.21;
		t.x = 960.08;
		t.y = 26.03;
		return t;
	};
	_proto.beishu_txt_i = function () {
		var t = new eui.Label();
		this.beishu_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.97;
		t.size = 40;
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 145.21;
		t.x = 1227.64;
		t.y = 23;
		return t;
	};
	_proto.moshi_txt_i = function () {
		var t = new eui.Label();
		this.moshi_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.size = 40;
		t.text = "体验场";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 178.54;
		t.x = 1540.67;
		t.y = 22;
		return t;
	};
	_proto.call_txt_i = function () {
		var t = new eui.Image();
		this.call_txt = t;
		t.source = "kaiju_json.bujiao";
		t.visible = false;
		t.x = 300.39;
		t.y = 591.72;
		return t;
	};
	_proto.left_call_txt_i = function () {
		var t = new eui.Image();
		this.left_call_txt = t;
		t.source = "kaiju_json.bujiao";
		t.visible = false;
		t.x = 416;
		t.y = 196;
		return t;
	};
	_proto.right_call_txt_i = function () {
		var t = new eui.Image();
		this.right_call_txt = t;
		t.source = "kaiju_json.jiaodizhu";
		t.visible = false;
		t.x = 1195.1;
		t.y = 196;
		return t;
	};
	return battleStage;
})(eui.Skin);generateEUI.paths['resource/scene/BRNN/brCardGroup.exml'] = window.bairenCardGroup = (function (_super) {
	__extends(bairenCardGroup, _super);
	function bairenCardGroup() {
		_super.call(this);
		this.skinParts = ["card_0","card_1","card_2","card_3","card_4","result_state"];
		
		this.height = 196;
		this.width = 306;
		this.elementsContent = [this.card_0_i(),this.card_1_i(),this.card_2_i(),this.card_3_i(),this.card_4_i(),this.result_state_i()];
	}
	var _proto = bairenCardGroup.prototype;

	_proto.card_0_i = function () {
		var t = new eui.Image();
		this.card_0 = t;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "niuniu_card_json.card_back";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card_1_i = function () {
		var t = new eui.Image();
		this.card_1 = t;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "niuniu_card_json.card_back";
		t.x = 42;
		t.y = 0;
		return t;
	};
	_proto.card_2_i = function () {
		var t = new eui.Image();
		this.card_2 = t;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "niuniu_card_json.card_back";
		t.x = 84;
		t.y = 0;
		return t;
	};
	_proto.card_3_i = function () {
		var t = new eui.Image();
		this.card_3 = t;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "niuniu_card_json.card_back";
		t.x = 126;
		t.y = 0;
		return t;
	};
	_proto.card_4_i = function () {
		var t = new eui.Image();
		this.card_4 = t;
		t.scaleX = 0.67;
		t.scaleY = 0.67;
		t.source = "niuniu_card_json.card_back";
		t.x = 168;
		t.y = 0;
		return t;
	};
	_proto.result_state_i = function () {
		var t = new eui.Image();
		this.result_state = t;
		t.source = "nn_n5hn_png";
		t.visible = false;
		t.x = 25;
		t.y = 40;
		return t;
	};
	return bairenCardGroup;
})(eui.Skin);generateEUI.paths['resource/scene/BRNN/BRNN_Battle.exml'] = window.BRNN_Battle = (function (_super) {
	__extends(BRNN_Battle, _super);
	var BRNN_Battle$Skin11 = 	(function (_super) {
		__extends(BRNN_Battle$Skin11, _super);
		function BRNN_Battle$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BRNN_Battle_json.BRNN_back")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BRNN_Battle$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BRNN_Battle_json.BRNN_back";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BRNN_Battle$Skin11;
	})(eui.Skin);

	var BRNN_Battle$Skin12 = 	(function (_super) {
		__extends(BRNN_Battle$Skin12, _super);
		function BRNN_Battle$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BRNN_Battle_json.BRNN_List")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BRNN_Battle$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BRNN_Battle_json.BRNN_List";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BRNN_Battle$Skin12;
	})(eui.Skin);

	var BRNN_Battle$Skin13 = 	(function (_super) {
		__extends(BRNN_Battle$Skin13, _super);
		function BRNN_Battle$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BRNN_Battle_json.BRNN_SZ")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BRNN_Battle$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BRNN_Battle_json.BRNN_SZ";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BRNN_Battle$Skin13;
	})(eui.Skin);

	function BRNN_Battle() {
		_super.call(this);
		this.skinParts = ["zhuangJiaHead","zhuangJiaCardGroup","zhuangjiaGroup","coin_1","coin_10","coin_50","coin_100","coin_500","coin_1000","coinGroup","my_group","return_btn","playerList_btn","rank_0","rank_1","rank_2","rank_3","rank_4","rank_5","doorGroup_1","doorGroup_2","doorGroup_3","doorGroup_4","currentTimeType_txt","currentTime_txt","cardGroup","xiaZhuLogo","biPaiLogo","shangZhuang_btn"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.zhuangjiaGroup_i(),this.my_group_i(),this.return_btn_i(),this.playerList_btn_i(),this._Group1_i(),this._Group2_i(),this.cardGroup_i(),this.xiaZhuLogo_i(),this.biPaiLogo_i(),this.shangZhuang_btn_i()];
	}
	var _proto = BRNN_Battle.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "QZNN_BG_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuangjiaGroup_i = function () {
		var t = new eui.Group();
		this.zhuangjiaGroup = t;
		t.height = 191;
		t.visible = false;
		t.x = 324;
		t.y = -3;
		t.elementsContent = [this._Image2_i(),this.zhuangJiaHead_i(),this.zhuangJiaCardGroup_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 191;
		t.scale9Grid = new egret.Rectangle(50,41,50,50);
		t.source = "BRNN_Battle_json.BRNN_player_data_9";
		t.width = 1272;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.zhuangJiaHead_i = function () {
		var t = new HeadGroup();
		this.zhuangJiaHead = t;
		t.height = 159;
		t.width = 350;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto.zhuangJiaCardGroup_i = function () {
		var t = new BairenCardGroup();
		this.zhuangJiaCardGroup = t;
		t.height = 196;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 306;
		t.y = 15.15;
		return t;
	};
	_proto.my_group_i = function () {
		var t = new eui.Group();
		this.my_group = t;
		t.x = 324;
		t.y = 911;
		t.elementsContent = [this._Image3_i(),this.coinGroup_i(),this._HeadGroup1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 191;
		t.scale9Grid = new egret.Rectangle(50,41,50,50);
		t.source = "BRNN_Battle_json.BRNN_player_data_9";
		t.width = 1272;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.coinGroup_i = function () {
		var t = new eui.Group();
		this.coinGroup = t;
		t.x = 414;
		t.y = 32;
		t.elementsContent = [this.coin_1_i(),this.coin_10_i(),this.coin_50_i(),this.coin_100_i(),this.coin_500_i(),this.coin_1000_i()];
		return t;
	};
	_proto.coin_1_i = function () {
		var t = new eui.Image();
		this.coin_1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 55;
		t.name = "1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "BRNN_Battle_json.BRNN_weight_1";
		t.x = 20;
		t.y = 48;
		return t;
	};
	_proto.coin_10_i = function () {
		var t = new eui.Image();
		this.coin_10 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 55;
		t.name = "10";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "BRNN_Battle_json.BRNN_weight_10";
		t.x = 168;
		t.y = 48;
		return t;
	};
	_proto.coin_50_i = function () {
		var t = new eui.Image();
		this.coin_50 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 55;
		t.name = "50";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "BRNN_Battle_json.BRNN_weight_50";
		t.x = 312;
		t.y = 48;
		return t;
	};
	_proto.coin_100_i = function () {
		var t = new eui.Image();
		this.coin_100 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 55;
		t.name = "100";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "BRNN_Battle_json.BRNN_weight_100";
		t.x = 456;
		t.y = 48;
		return t;
	};
	_proto.coin_500_i = function () {
		var t = new eui.Image();
		this.coin_500 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 55;
		t.name = "500";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "BRNN_Battle_json.BRNN_weight_500";
		t.x = 600;
		t.y = 48;
		return t;
	};
	_proto.coin_1000_i = function () {
		var t = new eui.Image();
		this.coin_1000 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 55;
		t.name = "1000";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "BRNN_Battle_json.BRNN_weight_1000";
		t.x = 744;
		t.y = 48;
		return t;
	};
	_proto._HeadGroup1_i = function () {
		var t = new HeadGroup();
		t.height = 159;
		t.width = 350;
		t.x = 20;
		t.y = 0;
		return t;
	};
	_proto.return_btn_i = function () {
		var t = new eui.Button();
		this.return_btn = t;
		t.label = "";
		t.x = 33;
		t.y = 25;
		t.skinName = BRNN_Battle$Skin11;
		return t;
	};
	_proto.playerList_btn_i = function () {
		var t = new eui.Button();
		this.playerList_btn = t;
		t.label = "";
		t.x = 124;
		t.y = 930;
		t.skinName = BRNN_Battle$Skin12;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = -13;
		t.y = 229;
		t.elementsContent = [this.rank_0_i(),this.rank_1_i(),this.rank_2_i(),this.rank_3_i(),this.rank_4_i(),this.rank_5_i()];
		return t;
	};
	_proto.rank_0_i = function () {
		var t = new RankHeadGroup();
		this.rank_0 = t;
		t.height = 259;
		t.visible = false;
		t.width = 175;
		t.x = 1720;
		t.y = -40;
		return t;
	};
	_proto.rank_1_i = function () {
		var t = new RankHeadGroup();
		this.rank_1 = t;
		t.height = 259;
		t.visible = false;
		t.width = 175;
		t.x = 0;
		t.y = -40;
		return t;
	};
	_proto.rank_2_i = function () {
		var t = new RankHeadGroup();
		this.rank_2 = t;
		t.height = 259;
		t.visible = false;
		t.width = 175;
		t.x = 1720;
		t.y = 170;
		return t;
	};
	_proto.rank_3_i = function () {
		var t = new RankHeadGroup();
		this.rank_3 = t;
		t.height = 259;
		t.visible = false;
		t.width = 175;
		t.x = 0;
		t.y = 170;
		return t;
	};
	_proto.rank_4_i = function () {
		var t = new RankHeadGroup();
		this.rank_4 = t;
		t.height = 259;
		t.visible = false;
		t.width = 175;
		t.x = 1720;
		t.y = 380;
		return t;
	};
	_proto.rank_5_i = function () {
		var t = new RankHeadGroup();
		this.rank_5 = t;
		t.height = 259;
		t.visible = false;
		t.width = 175;
		t.x = 0;
		t.y = 380;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 368;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this.doorGroup_1_i(),this.doorGroup_2_i(),this.doorGroup_3_i(),this.doorGroup_4_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -580;
		t.source = "BRNN_Battle_json.BRNN_H1";
		t.y = 136;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -180;
		t.source = "BRNN_Battle_json.BRNN_H2";
		t.y = 136;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 180;
		t.source = "BRNN_Battle_json.BRNN_H3";
		t.y = 136;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 580;
		t.source = "BRNN_Battle_json.BRNN_H4";
		t.y = 136;
		return t;
	};
	_proto.doorGroup_1_i = function () {
		var t = new DoorGroup();
		this.doorGroup_1 = t;
		t.height = 668;
		t.width = 340;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.doorGroup_2_i = function () {
		var t = new DoorGroup();
		this.doorGroup_2 = t;
		t.height = 668;
		t.width = 340;
		t.x = 372;
		t.y = 0;
		return t;
	};
	_proto.doorGroup_3_i = function () {
		var t = new DoorGroup();
		this.doorGroup_3 = t;
		t.height = 668;
		t.width = 340;
		t.x = 746;
		t.y = 0;
		return t;
	};
	_proto.doorGroup_4_i = function () {
		var t = new DoorGroup();
		this.doorGroup_4 = t;
		t.height = 668;
		t.width = 340;
		t.x = 1130;
		t.y = 0;
		return t;
	};
	_proto.cardGroup_i = function () {
		var t = new eui.Group();
		this.cardGroup = t;
		t.visible = false;
		t.x = 239;
		t.y = 225;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this.currentTimeType_txt_i(),this.currentTime_txt_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 219;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniu_card_json.card_back";
		t.width = 165;
		t.x = 0;
		t.y = 12;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 219;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniu_card_json.card_back";
		t.width = 165;
		t.x = 0;
		t.y = 8;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 219;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniu_card_json.card_back";
		t.width = 165;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 219;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "niuniu_card_json.card_back";
		t.width = 165;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 86;
		t.scale9Grid = new egret.Rectangle(180,25,32,152);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "BRNN_Battle_json.BRNN_tip_shadow";
		t.width = 279.07;
		t.x = 45;
		t.y = 57;
		return t;
	};
	_proto.currentTimeType_txt_i = function () {
		var t = new eui.Label();
		this.currentTimeType_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "开局倒计时";
		t.textColor = 0xffff00;
		t.x = 105;
		t.y = 84;
		return t;
	};
	_proto.currentTime_txt_i = function () {
		var t = new eui.Label();
		this.currentTime_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 50;
		t.text = "100s";
		t.textAlign = "center";
		t.textColor = 0xFFFF00;
		t.verticalAlign = "middle";
		t.width = 150;
		t.x = 110;
		t.y = 8;
		return t;
	};
	_proto.xiaZhuLogo_i = function () {
		var t = new eui.Label();
		this.xiaZhuLogo = t;
		t.alpha = 0.3;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.size = 160;
		t.text = "开始下注";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1219;
		return t;
	};
	_proto.biPaiLogo_i = function () {
		var t = new eui.Label();
		this.biPaiLogo = t;
		t.alpha = 0.3;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 250;
		t.horizontalCenter = 0;
		t.size = 160;
		t.text = "开始比牌";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1219;
		return t;
	};
	_proto.shangZhuang_btn_i = function () {
		var t = new eui.Button();
		this.shangZhuang_btn = t;
		t.label = "";
		t.x = 1300;
		t.y = 247;
		t.skinName = BRNN_Battle$Skin13;
		return t;
	};
	return BRNN_Battle;
})(eui.Skin);generateEUI.paths['resource/scene/BRNN/BRNN_Player_List.exml'] = window.BRNN_Player_List = (function (_super) {
	__extends(BRNN_Player_List, _super);
	var BRNN_Player_List$Skin14 = 	(function (_super) {
		__extends(BRNN_Player_List$Skin14, _super);
		function BRNN_Player_List$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","BRNN_List_json.BRNN_List_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BRNN_Player_List$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "BRNN_List_json.BRNN_List_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return BRNN_Player_List$Skin14;
	})(eui.Skin);

	function BRNN_Player_List() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Button1_i(),this._Image3_i(),this._Label1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
	}
	var _proto = BRNN_Player_List.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(10,10,12,13);
		t.source = "BRNN_List_json.BRNN_list_black";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "List_W_png";
		t.x = 103;
		t.y = 102;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1712;
		t.y = 149;
		t.skinName = BRNN_Player_List$Skin14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_playes";
		t.x = 834;
		t.y = 147;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "总人数：95";
		t.textAlign = "left";
		t.textColor = 0xffff00;
		t.x = 253;
		t.y = 174;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 176;
		t.y = 267;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Label7_i(),this._Image11_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(64,70,29,26);
		t.source = "BRNN_List_json.BRNN_List_P";
		t.width = 1572;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_DFW1";
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_SQS1";
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "阿猴";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 477;
		t.y = 26;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "近二十局";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 879;
		t.y = 64;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "第五名";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 93;
		t.y = 64;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "下注：94003100";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 1129;
		t.y = 38;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "获胜：99";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 1129;
		t.y = 94;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_playes_a";
		t.x = 295;
		t.y = 5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_Avatar_1";
		t.x = 314;
		t.y = 19;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_B";
		t.x = 477;
		t.y = 81;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_gold";
		t.x = 477;
		t.y = 82;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "1990";
		t.textAlign = "left";
		t.textColor = 0xffcc6a;
		t.x = 550;
		t.y = 94;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_GB1";
		t.x = 115;
		t.y = 62;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 176;
		t.y = 452;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Label13_i(),this._Image19_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(64,70,29,26);
		t.source = "BRNN_List_json.BRNN_List_P";
		t.width = 1572;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_DFW1";
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_SQS1";
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "阿猴";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 477;
		t.y = 26;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "近二十局";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 879;
		t.y = 64;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "第五名";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 93;
		t.y = 64;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "下注：94003100";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 1129;
		t.y = 38;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "获胜：99";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 1129;
		t.y = 94;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_playes_a";
		t.x = 295;
		t.y = 5;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_Avatar_1";
		t.x = 314;
		t.y = 19;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_B";
		t.x = 477;
		t.y = 81;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_gold";
		t.x = 477;
		t.y = 82;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "1990";
		t.textAlign = "left";
		t.textColor = 0xFFCC6A;
		t.x = 550;
		t.y = 94;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_GB1";
		t.x = 115;
		t.y = 62;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 176;
		t.y = 637;
		t.elementsContent = [this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Label19_i(),this._Image27_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(64,70,29,26);
		t.source = "BRNN_List_json.BRNN_List_P";
		t.width = 1572;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_DFW1";
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_SQS1";
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "阿猴";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 477;
		t.y = 26;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "近二十局";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 879;
		t.y = 64;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "第五名";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 93;
		t.y = 64;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "下注：94003100";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 1129;
		t.y = 38;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "获胜：99";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 1129;
		t.y = 94;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_playes_a";
		t.x = 295;
		t.y = 5;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_Avatar_1";
		t.x = 314;
		t.y = 19;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_B";
		t.x = 477;
		t.y = 81;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_gold";
		t.x = 477;
		t.y = 82;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "1990";
		t.textAlign = "left";
		t.textColor = 0xFFCC6A;
		t.x = 550;
		t.y = 94;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_GB1";
		t.x = 115;
		t.y = 62;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 176;
		t.y = 822;
		t.elementsContent = [this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Label20_i(),this._Label21_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Label25_i(),this._Image35_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(64,70,29,26);
		t.source = "BRNN_List_json.BRNN_List_P";
		t.width = 1572;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_DFW1";
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_SQS1";
		t.x = 80;
		t.y = 30;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "阿猴";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 477;
		t.y = 26;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "近二十局";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 879;
		t.y = 64;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "第五名";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 93;
		t.y = 64;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "下注：94003100";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 1129;
		t.y = 38;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "获胜：99";
		t.textAlign = "left";
		t.textColor = 0x000000;
		t.x = 1129;
		t.y = 94;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_playes_a";
		t.x = 295;
		t.y = 5;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_Avatar_1";
		t.x = 314;
		t.y = 19;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_B";
		t.x = 477;
		t.y = 81;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_list_gold";
		t.x = 477;
		t.y = 82;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "1990";
		t.textAlign = "left";
		t.textColor = 0xFFCC6A;
		t.x = 550;
		t.y = 94;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_List_json.BRNN_GB1";
		t.x = 115;
		t.y = 62;
		return t;
	};
	return BRNN_Player_List;
})(eui.Skin);generateEUI.paths['resource/scene/BRNN/brnn_select.exml'] = window.hall = (function (_super) {
	__extends(hall, _super);
	var hall$Skin15 = 	(function (_super) {
		__extends(hall$Skin15, _super);
		function hall$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","brnn_select_json.but_Unfold_0")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "brnn_select_json.but_Unfold_0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin15;
	})(eui.Skin);

	var hall$Skin16 = 	(function (_super) {
		__extends(hall$Skin16, _super);
		function hall$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","brnn_select_json.nn_x_05")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "brnn_select_json.nn_x_05";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin16;
	})(eui.Skin);

	var hall$Skin17 = 	(function (_super) {
		__extends(hall$Skin17, _super);
		function hall$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","brnn_select_json.nn_x_10")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "brnn_select_json.nn_x_10";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin17;
	})(eui.Skin);

	function hall() {
		_super.call(this);
		this.skinParts = ["return_btn","primary","high"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.return_btn_i(),this.primary_i(),this.high_i(),this._Image2_i()];
	}
	var _proto = hall.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.source = "nn_df_bg_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.return_btn_i = function () {
		var t = new eui.Button();
		this.return_btn = t;
		t.label = "";
		t.x = 18;
		t.y = 10;
		t.skinName = hall$Skin15;
		return t;
	};
	_proto.primary_i = function () {
		var t = new eui.Button();
		this.primary = t;
		t.label = "";
		t.x = 143;
		t.y = 213;
		t.skinName = hall$Skin16;
		return t;
	};
	_proto.high_i = function () {
		var t = new eui.Button();
		this.high = t;
		t.label = "";
		t.x = 978;
		t.y = 213;
		t.skinName = hall$Skin17;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "brnn_select_json.BRNN_logo";
		t.x = 1564;
		t.y = 23;
		return t;
	};
	return hall;
})(eui.Skin);generateEUI.paths['resource/scene/BRNN/doorGroup.exml'] = window.doorGroup = (function (_super) {
	__extends(doorGroup, _super);
	function doorGroup() {
		_super.call(this);
		this.skinParts = ["selectLogo","coin_container","totalXiaZhu_txt","nowXiaZhu_txt","cardGroup","pingLogo"];
		
		this.height = 668;
		this.width = 340;
		this.elementsContent = [this._Image1_i(),this.selectLogo_i(),this.coin_container_i(),this.totalXiaZhu_txt_i(),this.nowXiaZhu_txt_i(),this.cardGroup_i(),this.pingLogo_i()];
	}
	var _proto = doorGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_Battle_json.BRNN_b";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.selectLogo_i = function () {
		var t = new eui.Rect();
		this.selectLogo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.height = 460;
		t.strokeColor = 0xe2960d;
		t.strokeWeight = 5;
		t.visible = false;
		t.width = 340;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.coin_container_i = function () {
		var t = new eui.Group();
		this.coin_container = t;
		t.anchorOffsetY = 0;
		t.height = 292;
		t.width = 340;
		t.x = 0;
		t.y = 76;
		return t;
	};
	_proto.totalXiaZhu_txt_i = function () {
		var t = new eui.Label();
		this.totalXiaZhu_txt = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "总：0";
		t.textAlign = "center";
		t.textColor = 0xFFCC6A;
		t.width = 254;
		t.x = 60;
		t.y = 8;
		return t;
	};
	_proto.nowXiaZhu_txt_i = function () {
		var t = new eui.Label();
		this.nowXiaZhu_txt = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "下注：500";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.visible = false;
		t.x = 75;
		t.y = 402;
		return t;
	};
	_proto.cardGroup_i = function () {
		var t = new BairenCardGroup();
		this.cardGroup = t;
		t.anchorOffsetX = 0;
		t.height = 196;
		t.visible = false;
		t.width = 278;
		t.x = 31;
		t.y = 471;
		return t;
	};
	_proto.pingLogo_i = function () {
		var t = new eui.Image();
		this.pingLogo = t;
		t.source = "BRNN_Battle_json.BRNN_ping";
		t.visible = false;
		t.x = 14;
		t.y = 64;
		return t;
	};
	return doorGroup;
})(eui.Skin);generateEUI.paths['resource/scene/BRNN/headGroup.exml'] = window.NewFile = (function (_super) {
	__extends(NewFile, _super);
	function NewFile() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 159;
		this.width = 350;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i(),this._Image4_i()];
	}
	var _proto = NewFile.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 166;
		t.source = "BRNN_Battle_json.BRNN_Avatar";
		t.width = 166;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_Battle_json.BRNN_Avatar_0";
		t.x = 19;
		t.y = 14;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_Battle_json.BRNN_gold";
		t.x = 156;
		t.y = 87;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "鸭王来了";
		t.x = 156;
		t.y = 39;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "195440";
		t.textColor = 0xFFFF00;
		t.x = 198;
		t.y = 87;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_Battle_json.BRNN_GB";
		t.x = 44;
		t.y = 109;
		return t;
	};
	return NewFile;
})(eui.Skin);generateEUI.paths['resource/scene/BRNN/rankHeadGroup.exml'] = window.rankHeadGroup = (function (_super) {
	__extends(rankHeadGroup, _super);
	function rankHeadGroup() {
		_super.call(this);
		this.skinParts = ["headImage","nickName_txt","goldNum_txt","chenghaoLogo","guibinLogo"];
		
		this.height = 259;
		this.width = 175;
		this.elementsContent = [this._Image1_i(),this.headImage_i(),this._Image2_i(),this._Image3_i(),this.nickName_txt_i(),this.goldNum_txt_i(),this.chenghaoLogo_i(),this.guibinLogo_i()];
	}
	var _proto = rankHeadGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "BRNN_Battle_json.BRNN_Avatar";
		t.y = 55;
		return t;
	};
	_proto.headImage_i = function () {
		var t = new eui.Image();
		this.headImage = t;
		t.height = 150;
		t.horizontalCenter = 0;
		t.source = "BRNN_Battle_json.BRNN_Avatar_0";
		t.width = 150;
		t.y = 68;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "BRNN_Battle_json.BRNN_player_data";
		t.y = 195;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "BRNN_Battle_json.BRNN_gold";
		t.x = 10;
		t.y = 224;
		return t;
	};
	_proto.nickName_txt_i = function () {
		var t = new eui.Label();
		this.nickName_txt = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "鸭王来了";
		t.y = 197;
		return t;
	};
	_proto.goldNum_txt_i = function () {
		var t = new eui.Label();
		this.goldNum_txt = t;
		t.size = 28;
		t.text = "195440";
		t.textColor = 0xFFFF00;
		t.x = 47;
		t.y = 227;
		return t;
	};
	_proto.chenghaoLogo_i = function () {
		var t = new eui.Image();
		this.chenghaoLogo = t;
		t.horizontalCenter = 0;
		t.source = "BRNN_Battle_json.BRNN_DFW";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.guibinLogo_i = function () {
		var t = new eui.Image();
		this.guibinLogo = t;
		t.horizontalCenter = 0;
		t.source = "BRNN_Battle_json.BRNN_GB";
		t.y = 155.12;
		return t;
	};
	return rankHeadGroup;
})(eui.Skin);generateEUI.paths['resource/scene/cash.exml'] = window.$exmlClass18 = (function (_super) {
	__extends($exmlClass18, _super);
	var $exmlClass18$Skin19 = 	(function (_super) {
		__extends($exmlClass18$Skin19, _super);
		function $exmlClass18$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass18$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass18$Skin19;
	})(eui.Skin);

	var $exmlClass18$Skin20 = 	(function (_super) {
		__extends($exmlClass18$Skin20, _super);
		function $exmlClass18$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","half_btn_y_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass18$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "half_btn_b_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass18$Skin20;
	})(eui.Skin);

	var $exmlClass18$Skin21 = 	(function (_super) {
		__extends($exmlClass18$Skin21, _super);
		function $exmlClass18$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","twice_btn_y_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass18$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "twice_btn_b_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass18$Skin21;
	})(eui.Skin);

	var $exmlClass18$Skin22 = 	(function (_super) {
		__extends($exmlClass18$Skin22, _super);
		function $exmlClass18$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","max_btn_y_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass18$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "max_btn_b_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass18$Skin22;
	})(eui.Skin);

	var $exmlClass18$Skin23 = 	(function (_super) {
		__extends($exmlClass18$Skin23, _super);
		function $exmlClass18$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass18$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "reset_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass18$Skin23;
	})(eui.Skin);

	var $exmlClass18$Skin24 = 	(function (_super) {
		__extends($exmlClass18$Skin24, _super);
		function $exmlClass18$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass18$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "cash_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass18$Skin24;
	})(eui.Skin);

	function $exmlClass18() {
		_super.call(this);
		this.skinParts = ["tip_txt","half_btn","twice_btn","max_btn","num_10","num_0","num_1","num_2","num_3","num_4","num_5","num_6","num_7","num_9","key_board","cash_txt","reset_btn","cash_btn","close_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group2_i()];
	}
	var _proto = $exmlClass18.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 750;
		t.strokeAlpha = 0;
		t.strokeColor = 0x000000;
		t.width = 1227;
		t.x = 120;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 570;
		t.horizontalCenter = 0;
		t.width = 1100;
		t.y = 112;
		t.elementsContent = [this._Image1_i(),this._Button1_i(),this._Label1_i(),this.tip_txt_i(),this._Image2_i(),this._Group1_i(),this.key_board_i(),this.cash_txt_i(),this.reset_btn_i(),this.cash_btn_i(),this._Image3_i(),this.close_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 570;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recharge_bg_png";
		t.verticalCenter = 0;
		t.width = 1100;
		t.x = 19;
		t.y = -34;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.height = 36;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 36;
		t.x = 1027;
		t.y = 62;
		t.skinName = $exmlClass18$Skin19;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "提取后，立刻到账";
		t.textColor = 0xffffff;
		t.x = 744.88;
		t.y = 273;
		return t;
	};
	_proto.tip_txt_i = function () {
		var t = new eui.Label();
		this.tip_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "最多可提现EKT  1600.2314";
		t.textColor = 0xffffff;
		t.width = 560;
		t.x = 178;
		t.y = 272;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "left_ekt_png";
		t.width = 40;
		t.x = 130;
		t.y = 266;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 90;
		t.horizontalCenter = 0;
		t.width = 880;
		t.y = 149.18;
		t.elementsContent = [this._Rect2_i(),this._Label2_i(),this.half_btn_i(),this.twice_btn_i(),this.max_btn_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x081746;
		t.height = 90;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 2;
		t.width = 880;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = -350;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "提现金额";
		t.textColor = 0x00c6ff;
		t.verticalCenter = 0;
		return t;
	};
	_proto.half_btn_i = function () {
		var t = new eui.Button();
		this.half_btn = t;
		t.label = "";
		t.x = 583.27;
		t.y = 15;
		t.skinName = $exmlClass18$Skin20;
		return t;
	};
	_proto.twice_btn_i = function () {
		var t = new eui.Button();
		this.twice_btn = t;
		t.label = "";
		t.x = 681.64;
		t.y = 15;
		t.skinName = $exmlClass18$Skin21;
		return t;
	};
	_proto.max_btn_i = function () {
		var t = new eui.Button();
		this.max_btn = t;
		t.label = "";
		t.x = 778.88;
		t.y = 15;
		t.skinName = $exmlClass18$Skin22;
		return t;
	};
	_proto.key_board_i = function () {
		var t = new eui.Group();
		this.key_board = t;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.horizontalCenter = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 880;
		t.x = 112;
		t.y = 317;
		t.elementsContent = [this.num_10_i(),this.num_0_i(),this.num_1_i(),this.num_2_i(),this.num_3_i(),this.num_4_i(),this.num_5_i(),this.num_6_i(),this.num_7_i(),this.num_9_i()];
		return t;
	};
	_proto.num_10_i = function () {
		var t = new eui.Label();
		this.num_10 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "1";
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.num_0_i = function () {
		var t = new eui.Label();
		this.num_0 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "2";
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 88;
		t.y = 0;
		return t;
	};
	_proto.num_1_i = function () {
		var t = new eui.Label();
		this.num_1 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "3";
		t.text = "3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 176;
		t.y = 0;
		return t;
	};
	_proto.num_2_i = function () {
		var t = new eui.Label();
		this.num_2 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "4";
		t.text = "4";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 264;
		t.y = 0;
		return t;
	};
	_proto.num_3_i = function () {
		var t = new eui.Label();
		this.num_3 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "5";
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 352;
		t.y = 0;
		return t;
	};
	_proto.num_4_i = function () {
		var t = new eui.Label();
		this.num_4 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "6";
		t.text = "6";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.num_5_i = function () {
		var t = new eui.Label();
		this.num_5 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "7";
		t.text = "7";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 528;
		t.y = 0;
		return t;
	};
	_proto.num_6_i = function () {
		var t = new eui.Label();
		this.num_6 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "8";
		t.text = "8";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 616;
		t.y = 0;
		return t;
	};
	_proto.num_7_i = function () {
		var t = new eui.Label();
		this.num_7 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "9";
		t.text = "9";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 703;
		t.y = 0;
		return t;
	};
	_proto.num_9_i = function () {
		var t = new eui.Label();
		this.num_9 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "0";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 791;
		t.y = 0;
		return t;
	};
	_proto.cash_txt_i = function () {
		var t = new eui.Label();
		this.cash_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.border = false;
		t.borderColor = 0xFFFFFF;
		t.height = 67;
		t.horizontalCenter = -99;
		t.maxChars = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 44;
		t.text = "100000000";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = -91.5;
		t.width = 340;
		t.x = 293;
		t.y = 161;
		return t;
	};
	_proto.reset_btn_i = function () {
		var t = new eui.Button();
		this.reset_btn = t;
		t.label = "";
		t.x = 630;
		t.y = 172;
		t.skinName = $exmlClass18$Skin23;
		return t;
	};
	_proto.cash_btn_i = function () {
		var t = new eui.Button();
		this.cash_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 410;
		t.y = 405;
		t.skinName = $exmlClass18$Skin24;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cash_label_png";
		t.width = 240;
		t.x = 430;
		t.y = 57;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Button();
		this.close_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.label = "";
		t.width = 94;
		t.x = 1017;
		t.y = 11;
		return t;
	};
	return $exmlClass18;
})(eui.Skin);generateEUI.paths['resource/scene/gameRule.exml'] = window.$exmlClass25 = (function (_super) {
	__extends($exmlClass25, _super);
	var $exmlClass25$Skin26 = 	(function (_super) {
		__extends($exmlClass25$Skin26, _super);
		function $exmlClass25$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","GameRule_json.game_rule_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass25$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "GameRule_json.game_rule_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass25$Skin26;
	})(eui.Skin);

	function $exmlClass25() {
		_super.call(this);
		this.skinParts = ["dzz_rule","qznn_rule","brnn_rule","qznn_rule_tip","brnn_rule_tip","ddz_rule_tip"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Group1_i(),this.dzz_rule_i(),this.qznn_rule_i(),this.brnn_rule_i(),this.qznn_rule_tip_i(),this.brnn_rule_tip_i(),this.ddz_rule_tip_i()];
	}
	var _proto = $exmlClass25.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.source = "Game_Rule_bg_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.source = "GameRule_json.game_rule_black";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 103;
		t.y = 102;
		t.elementsContent = [this._Image3_i(),this._Button1_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "game_rule_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1609;
		t.y = 33;
		t.skinName = $exmlClass25$Skin26;
		return t;
	};
	_proto.dzz_rule_i = function () {
		var t = new eui.Group();
		this.dzz_rule = t;
		t.height = 2600;
		t.x = 160;
		t.y = 270;
		t.elementsContent = [this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "基础玩法";
		t.textAlign = "center";
		t.textColor = 0xffff00;
		t.width = 1595;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "1.发牌：一副牌，六三张牌，其他发给三家，底牌加到地主手中。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 50.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "2.叫牌：较牌按照出牌的顺序轮流进行，没人只能叫一次。较牌时可以叫“1分”.“2分”.“3分”.“不叫”。后叫牌者只能叫比前面高的分或者不叫。叫牌结束后所哟叫分值最大的玩家为地主；如果有玩家叫“3分”则立即结束叫牌，该玩家为地主；如果都不叫，则重新发牌，重新较牌。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 101;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "3.加倍；叫牌结束后，农民玩家可以选择“加倍”.和“不加倍”。加倍后玩家输赢结算得分翻倍，不加倍得分无倍率变化。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 219.5;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "3.出牌：三张底牌亮起后，由地主首先出牌，然后按照逆时针顺序依次出牌，也可以选择“不出”表示本轮不出牌。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 304;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牌型大小";
		t.textAlign = "center";
		t.textColor = 0xffff00;
		t.width = 1595;
		t.x = 0;
		t.y = 1869;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牌型说明";
		t.textAlign = "center";
		t.textColor = 0xffff00;
		t.width = 1595;
		t.x = 0;
		t.y = 378;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "1.火箭最大。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 1928;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "2.炸弹牌型大于除火箭外所有的牌型。炸弹的牌型相互比较时，点数打的炸弹大";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 1980.6666666666667;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "3.非炸弹的牌型，只有牌型和张数相同才能相互比较，点数大的则大。三代二，飞机带翅膀的牌型比较牌型中樟树最多的牌的点数即可。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 2033.3333333333335;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "4.点数大小：大王＞小王＞2＞A＞K＞Q＞J＞10＞9＞8＞7＞6＞5＞4＞3";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 2120;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "计分规则";
		t.textAlign = "center";
		t.textColor = 0xffff00;
		t.width = 1595;
		t.x = 0;
		t.y = 2204;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "1.叫分：总倍数*叫分分值";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 2251.63;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "2.炸弹：总倍数*2";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 2298.27;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "3.春天：地主出牌至牌局结束，农民一张牌未出即为春天，总倍数*2。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 2344;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "4.反春天：地主只出了第一手牌后，农民出牌至结束即为反春天，总倍数*2。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 2390;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "5.游戏总倍数上不封顶，但最大输赢分不超过自己所携带金币。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 2436;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 434;
		t.elementsContent = [this._Image4_i(),this._Label18_i(),this._Label19_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "火箭";
		t.textAlign = "center";
		t.textColor = 0xffc499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "双王牌（最大的牌）";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_JOJO";
		t.x = 195;
		t.y = 88;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 541;
		t.y = 434;
		t.elementsContent = [this._Image6_i(),this._Label20_i(),this._Label21_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "炸弹";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "点数相同的4张牌，同为炸弹比点数大小。";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_BOOM";
		t.x = 163;
		t.y = 88;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 1082;
		t.y = 434;
		t.elementsContent = [this._Image8_i(),this._Label22_i(),this._Label23_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "单牌";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "单张牌";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_1";
		t.x = 210;
		t.y = 88;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 788;
		t.elementsContent = [this._Image10_i(),this._Label24_i(),this._Label25_i(),this._Image11_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "对子";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "点数相同的两张牌";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_2";
		t.x = 195;
		t.y = 88;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.x = 541;
		t.y = 788;
		t.elementsContent = [this._Image12_i(),this._Label26_i(),this._Label27_i(),this._Image13_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "三张";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "点数相同的三张牌";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_3";
		t.x = 178;
		t.y = 88;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 1082;
		t.y = 788;
		t.elementsContent = [this._Image14_i(),this._Label28_i(),this._Label29_i(),this._Image15_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "三带一";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "点数相同的三张牌+1张单牌";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_3d1";
		t.x = 158;
		t.y = 88;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 541;
		t.y = 1142;
		t.elementsContent = [this._Image16_i(),this._Label30_i(),this._Label31_i(),this._Image17_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "顺子";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "五张及以上的连续单牌";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_78910J";
		t.x = 148;
		t.y = 88;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 1082;
		t.y = 1142;
		t.elementsContent = [this._Image18_i(),this._Label32_i(),this._Label33_i(),this._Image19_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "连对";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "3对及以上的连续对子（不包括2和王）";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_AAKKQQ";
		t.x = 131;
		t.y = 88;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 1142;
		t.elementsContent = [this._Image20_i(),this._Label34_i(),this._Label35_i(),this._Image21_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "三带二";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label35_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "点数相同的三张牌+1对子";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_3d2";
		t.x = 138;
		t.y = 88;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 1496;
		t.elementsContent = [this._Image22_i(),this._Label36_i(),this._Label37_i(),this._Image23_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label36_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "飞机";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label37_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "2个及以上的连续【三张】（不包括2和王）";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_KKKQQQ";
		t.x = 123;
		t.y = 88;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 541;
		t.y = 1496;
		t.elementsContent = [this._Image24_i(),this._Label38_i(),this._Label39_i(),this._Image25_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label38_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "飞机带翅膀";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label39_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "【飞机】带相同数量的【单牌】或【对子】";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_3x3x2x2";
		t.x = 72;
		t.y = 88;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 1082;
		t.y = 1496;
		t.elementsContent = [this._Image26_i(),this._Label40_i(),this._Label41_i(),this._Image27_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 333;
		t.scale9Grid = new egret.Rectangle(33,29,61,73);
		t.source = "GameRule_json.game_rule_black";
		t.width = 512;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label40_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "四带二";
		t.textAlign = "center";
		t.textColor = 0xFFC499;
		t.width = 512;
		t.x = 0;
		t.y = 31;
		return t;
	};
	_proto._Label41_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "【炸弹】带2张【单牌】或2对【对子】";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.width = 512;
		t.x = 0;
		t.y = 232;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.dzz_rule_4d2";
		t.x = 139;
		t.y = 88;
		return t;
	};
	_proto.qznn_rule_i = function () {
		var t = new eui.Group();
		this.qznn_rule = t;
		t.height = 1280;
		t.visible = false;
		t.x = 160;
		t.y = 270;
		t.elementsContent = [this._Label42_i(),this._Label43_i(),this._Label44_i(),this._Label45_i(),this._Label46_i(),this._Label47_i(),this._Label48_i(),this._Group14_i(),this._Group15_i(),this._Group16_i(),this._Group17_i(),this._Group18_i()];
		return t;
	};
	_proto._Label42_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "基本牌型";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label43_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牌型大小：五花牛＞四花牛＞牛牛＞有牛＞没牛";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 727;
		return t;
	};
	_proto._Label44_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牌型倍率：五花牛×5	四花牛×4	牛牛×3	牛九~牛七×2	牛六~没牛×1";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 788.8;
		return t;
	};
	_proto._Label45_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "点数大小：K＞Q＞J＞10＞9＞8＞7＞6＞5＞4＞3＞2＞A";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 850.6;
		return t;
	};
	_proto._Label46_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "花色大小：黑桃＞红桃＞梅花＞方块";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 912.4;
		return t;
	};
	_proto._Label47_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "结算方式：庄家抢庄倍率*闲家下注倍率*获胜牌型倍率*底分";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 974.2;
		return t;
	};
	_proto._Label48_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "特殊：出现相同牌型，比较双方最大一张牌点数大小，若点数也相同则比较花色大小。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 1036;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 63;
		t.elementsContent = [this._Label49_i(),this._Label50_i(),this._Image28_i()];
		return t;
	};
	_proto._Label49_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "没牛";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 19;
		return t;
	};
	_proto._Label50_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "任意3张相加无法组成10的倍数";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 66;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_nn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 194;
		t.elementsContent = [this._Label51_i(),this._Label52_i(),this._Image29_i()];
		return t;
	};
	_proto._Label51_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牛九~牛一";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 19;
		return t;
	};
	_proto._Label52_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "任意3张点数相加为10的倍数，另外2张点数相加个数为几，即为牛几。";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 66;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_n91";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 325;
		t.elementsContent = [this._Label53_i(),this._Label54_i(),this._Image30_i()];
		return t;
	};
	_proto._Label53_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牛牛";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 19;
		return t;
	};
	_proto._Label54_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "任意3张点数相加为10的倍数，另外2张点数相加为10的倍数。";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 66;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_nn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 456;
		t.elementsContent = [this._Label55_i(),this._Label56_i(),this._Image31_i()];
		return t;
	};
	_proto._Label55_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "四花牛";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 19;
		return t;
	};
	_proto._Label56_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牌面为10、J、Q、K任意组合，且组合中只存在一张10。";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 66;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_4hn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 587;
		t.elementsContent = [this._Label57_i(),this._Label58_i(),this._Image32_i()];
		return t;
	};
	_proto._Label57_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "五花牛";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 19;
		return t;
	};
	_proto._Label58_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牌面为J、Q、K任意组合";
		t.textAlign = "left";
		t.width = 1280;
		t.x = 275;
		t.y = 66;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_5hn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.brnn_rule_i = function () {
		var t = new eui.Group();
		this.brnn_rule = t;
		t.height = 1280;
		t.visible = false;
		t.x = 160;
		t.y = 270;
		t.elementsContent = [this._Label59_i(),this._Label60_i(),this._Label61_i(),this._Label62_i(),this._Label63_i(),this._Label64_i(),this._Label65_i(),this._Label66_i(),this._Label67_i(),this._Label68_i(),this._Group19_i(),this._Group20_i(),this._Group21_i(),this._Group22_i(),this._Group23_i(),this._Group24_i(),this._Group25_i()];
		return t;
	};
	_proto._Label59_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "《百人牛牛》是一款及刺激的多人扑克游戏，游戏由四个投注区组成。游戏开始，每个投注区及庄家各发5张牌，各投注区分别与庄家比较牌型大小，确定胜负。玩家满足上庄条件可申请上庄，庄家不允许投注。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label60_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "基本牌型大小：五花牛＞四花牛＞牛牛＞有牛＞没牛";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 89.875;
		return t;
	};
	_proto._Label61_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "有牛牌型大小：牛九＞牛八＞牛七＞牛六＞牛五＞牛四＞牛三＞牛二＞牛一";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 146.55;
		return t;
	};
	_proto._Label62_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "低倍场牌型倍率：五小牛及四炸×5	五花牛及四花牛×4	牛牛×3	牛七~牛九×2		没牛~牛六×1";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 202.225;
		return t;
	};
	_proto._Label63_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "高倍场牌型倍率：牛牛及以上牌型×10	牛一~牛九对应倍率×1~9	没牛×1";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 258.9;
		return t;
	};
	_proto._Label64_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "单张大小：K＞Q＞J＞10＞9＞8＞7＞6＞5＞4＞3＞2＞A";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 314.575;
		return t;
	};
	_proto._Label65_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "花色大小：黑桃＞红桃＞梅花＞方块";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 370.25;
		return t;
	};
	_proto._Label66_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "结算方式：庄家抢庄倍率*闲家下注倍率*获胜牌型倍率*底分";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 427.125;
		return t;
	};
	_proto._Label67_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "特殊：出现相同牌型，比较双方最大一张牌点数大小，若点数也相同则比较花色大小。";
		t.textAlign = "left";
		t.width = 1595;
		t.x = 0;
		t.y = 483;
		return t;
	};
	_proto._Label68_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "基本牌型";
		t.textAlign = "center";
		t.width = 1595;
		t.x = 0;
		t.y = 544;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 24;
		t.y = 590;
		t.elementsContent = [this._Label69_i(),this._Label70_i(),this._Image33_i()];
		return t;
	};
	_proto._Label69_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "五小牛";
		t.textAlign = "left";
		t.textColor = 0xffff00;
		t.width = 480;
		t.x = 275;
		t.y = 2;
		return t;
	};
	_proto._Label70_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "5张牌军部大于5且相加之和部大于10。";
		t.textAlign = "left";
		t.width = 480;
		t.x = 275;
		t.y = 43;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_5xn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 817;
		t.y = 590;
		t.elementsContent = [this._Label71_i(),this._Label72_i(),this._Image34_i()];
		return t;
	};
	_proto._Label71_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "四炸";
		t.textAlign = "left";
		t.textColor = 0xFFFF00;
		t.width = 480;
		t.x = 275;
		t.y = 2;
		return t;
	};
	_proto._Label72_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "5张牌中又4张完全一样。";
		t.textAlign = "left";
		t.width = 480;
		t.x = 275;
		t.y = 43;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_4z";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.x = 24;
		t.y = 727.6666666666666;
		t.elementsContent = [this._Label73_i(),this._Label74_i(),this._Image35_i()];
		return t;
	};
	_proto._Label73_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "五花牛";
		t.textAlign = "left";
		t.textColor = 0xFFFF00;
		t.width = 480;
		t.x = 275;
		t.y = 2;
		return t;
	};
	_proto._Label74_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牌面为J、Q、K的任意组合";
		t.textAlign = "left";
		t.width = 480;
		t.x = 275;
		t.y = 43;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_5hn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.x = 817;
		t.y = 729;
		t.elementsContent = [this._Label75_i(),this._Label76_i(),this._Image36_i()];
		return t;
	};
	_proto._Label75_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "四花牛";
		t.textAlign = "left";
		t.textColor = 0xFFFF00;
		t.width = 480;
		t.x = 275;
		t.y = 2;
		return t;
	};
	_proto._Label76_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牌面为10、J、Q、K的任意组合，且组合只能存在一张10。";
		t.textAlign = "left";
		t.width = 480;
		t.x = 275;
		t.y = 43;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_4hn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.x = 24;
		t.y = 865.3333333333333;
		t.elementsContent = [this._Label77_i(),this._Label78_i(),this._Image37_i()];
		return t;
	};
	_proto._Label77_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牛牛";
		t.textAlign = "left";
		t.textColor = 0xFFFF00;
		t.width = 480;
		t.x = 275;
		t.y = 2;
		return t;
	};
	_proto._Label78_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "5张拍中任意3张相加为10的倍数，余2张相加为10的倍数。";
		t.textAlign = "left";
		t.width = 480;
		t.x = 275;
		t.y = 43;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_nn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.x = 817;
		t.y = 868;
		t.elementsContent = [this._Label79_i(),this._Label80_i(),this._Image38_i()];
		return t;
	};
	_proto._Label79_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "牛一~牛九";
		t.textAlign = "left";
		t.textColor = 0xFFFF00;
		t.width = 480;
		t.x = 275;
		t.y = 2;
		return t;
	};
	_proto._Label80_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "5张牌中任意3张相加为10的倍数，余2张个位数为几即为牛几（JQK为10，A为1）";
		t.textAlign = "left";
		t.width = 480;
		t.x = 275;
		t.y = 43;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_n91";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.x = 24;
		t.y = 1003;
		t.elementsContent = [this._Label81_i(),this._Label82_i(),this._Image39_i()];
		return t;
	};
	_proto._Label81_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "没牛";
		t.textAlign = "left";
		t.textColor = 0xFFFF00;
		t.width = 480;
		t.x = 275;
		t.y = 2;
		return t;
	};
	_proto._Label82_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "5张牌中任意3张相加不为10的倍数";
		t.textAlign = "left";
		t.width = 480;
		t.x = 275;
		t.y = 43;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.source = "GameRule_json.nn_rule_mn";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.qznn_rule_tip_i = function () {
		var t = new eui.Label();
		this.qznn_rule_tip = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "每局游戏结算，将收取盈利部分5%的服务费。";
		t.textAlign = "center";
		t.visible = false;
		t.width = 1595;
		t.x = 160;
		t.y = 908;
		return t;
	};
	_proto.brnn_rule_tip_i = function () {
		var t = new eui.Label();
		this.brnn_rule_tip = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "每局游戏结算将收取盈利部分3%的服务费，且最大输赢分不超过所携带的金币。";
		t.textAlign = "center";
		t.visible = false;
		t.width = 1595;
		t.x = 160;
		t.y = 908;
		return t;
	};
	_proto.ddz_rule_tip_i = function () {
		var t = new eui.Label();
		this.ddz_rule_tip = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 34;
		t.text = "每局游戏结算将收取盈利部分3%的服务费，且最大输赢分不超过所携带的金币。";
		t.textAlign = "center";
		t.visible = false;
		t.width = 1595;
		t.x = 160;
		t.y = 908;
		return t;
	};
	return $exmlClass25;
})(eui.Skin);generateEUI.paths['resource/scene/Ground.exml'] = window.TopHead = (function (_super) {
	__extends(TopHead, _super);
	var TopHead$Skin27 = 	(function (_super) {
		__extends(TopHead$Skin27, _super);
		function TopHead$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TopHead$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "model_json.return_btn";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return TopHead$Skin27;
	})(eui.Skin);

	function TopHead() {
		_super.call(this);
		this.skinParts = ["match_2_btn","match_4_btn","return_btn","tip_btn","match_1_btn","match_5_btn","match_3_btn","fast_play_btn","ekt_txt1","gold_txt0","diamond_txt0","name_txt0","head_icon0","vip_txt0","touxiang_box0","top_bar"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.match_2_btn_i(),this.match_4_btn_i(),this.return_btn_i(),this.tip_btn_i(),this.match_1_btn_i(),this.match_5_btn_i(),this.match_3_btn_i(),this.fast_play_btn_i(),this._Image4_i(),this._Image5_i(),this.ekt_txt1_i(),this.top_bar_i()];
	}
	var _proto = TopHead.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.source = "hall_bg_png";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "model_json.bottom";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "model_json.toumingdi";
		t.verticalCenter = 0;
		return t;
	};
	_proto.match_2_btn_i = function () {
		var t = new eui.Image();
		this.match_2_btn = t;
		t.source = "model_json.match_2";
		t.x = 732.11;
		t.y = 256;
		return t;
	};
	_proto.match_4_btn_i = function () {
		var t = new eui.Image();
		this.match_4_btn = t;
		t.source = "model_json.match_4";
		t.x = 208.41;
		t.y = 577;
		return t;
	};
	_proto.return_btn_i = function () {
		var t = new eui.Button();
		this.return_btn = t;
		t.label = "";
		t.x = 90.91;
		t.y = 944;
		t.skinName = TopHead$Skin27;
		return t;
	};
	_proto.tip_btn_i = function () {
		var t = new eui.Image();
		this.tip_btn = t;
		t.source = "model_json.rule_btn";
		t.x = 211.83;
		t.y = 179;
		return t;
	};
	_proto.match_1_btn_i = function () {
		var t = new eui.Image();
		this.match_1_btn = t;
		t.source = "model_json.match_1";
		t.x = 244.77;
		t.y = 256;
		return t;
	};
	_proto.match_5_btn_i = function () {
		var t = new eui.Image();
		this.match_5_btn = t;
		t.source = "model_json.match_5";
		t.x = 689.69;
		t.y = 577;
		return t;
	};
	_proto.match_3_btn_i = function () {
		var t = new eui.Image();
		this.match_3_btn = t;
		t.source = "model_json.match_3";
		t.x = 1215.48;
		t.y = 256;
		return t;
	};
	_proto.fast_play_btn_i = function () {
		var t = new eui.Image();
		this.fast_play_btn = t;
		t.source = "model_json.fast_btn";
		t.x = 1486;
		t.y = 908;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "model_json.tip";
		t.x = 583;
		t.y = 197;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "model_json.model_tip_bg";
		t.x = 538;
		t.y = 179;
		return t;
	};
	_proto.ekt_txt1_i = function () {
		var t = new eui.Label();
		this.ekt_txt1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.size = 32;
		t.text = "尊敬的玩家：如果您在游戏中遇到任何问题,请...";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 669;
		t.x = 651;
		t.y = 197;
		return t;
	};
	_proto.top_bar_i = function () {
		var t = new eui.Group();
		this.top_bar = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.gold_txt0_i(),this.diamond_txt0_i(),this.touxiang_box0_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.dingbudi";
		t.x = 212;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.dikuang";
		t.x = 559;
		t.y = 24;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 68;
		t.source = "hall_json.dikuang";
		t.width = 355;
		t.x = 1020;
		t.y = 29;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.gold_icon";
		t.x = 547.03;
		t.y = 31.06;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.diamond_icon";
		t.x = 994;
		t.y = 21;
		return t;
	};
	_proto.gold_txt0_i = function () {
		var t = new eui.Label();
		this.gold_txt0 = t;
		t.height = 36;
		t.size = 46;
		t.text = "98300";
		t.width = 139;
		t.x = 695;
		t.y = 45;
		return t;
	};
	_proto.diamond_txt0_i = function () {
		var t = new eui.Label();
		this.diamond_txt0 = t;
		t.height = 34;
		t.size = 46;
		t.text = "35";
		t.width = 100;
		t.x = 1175;
		t.y = 46;
		return t;
	};
	_proto.touxiang_box0_i = function () {
		var t = new eui.Group();
		this.touxiang_box0 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this.name_txt0_i(),this.head_icon0_i(),this._Image12_i(),this.vip_txt0_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.dingbuzuo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.name_txt0_i = function () {
		var t = new eui.Label();
		this.name_txt0 = t;
		t.height = 36;
		t.size = 38;
		t.text = "游客123456";
		t.width = 229;
		t.x = 258.21;
		t.y = 6.73;
		return t;
	};
	_proto.head_icon0_i = function () {
		var t = new eui.Image();
		this.head_icon0 = t;
		t.source = "hall_json.head_icon";
		t.width = 95;
		t.x = 137.39;
		t.y = -1.89;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.vip_bg";
		t.x = 249.12;
		t.y = 54.23;
		return t;
	};
	_proto.vip_txt0_i = function () {
		var t = new eui.Label();
		this.vip_txt0 = t;
		t.bold = true;
		t.height = 23;
		t.size = 28;
		t.text = "V7";
		t.textAlign = "left";
		t.width = 53;
		t.x = 319.69;
		t.y = 64.73;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.active_btn";
		t.x = 1454;
		t.y = 21;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.source = "hall_json.notice_btn";
		t.width = 87;
		t.x = 1762.12;
		t.y = 23;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 87;
		t.source = "hall_json.tequan_btn";
		t.width = 80;
		t.x = 1607;
		t.y = 20;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.jiaqian_btn";
		t.x = 855;
		t.y = 32;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.jiaqian_btn";
		t.x = 1302;
		t.y = 32;
		return t;
	};
	return TopHead;
})(eui.Skin);generateEUI.paths['resource/scene/hall.exml'] = window.hall = (function (_super) {
	__extends(hall, _super);
	function hall() {
		_super.call(this);
		this.skinParts = ["hall_bg","bg_bottom","shop_btn","safe_btn","kefu_btn","main_game_btn","huanle_btn","jinsanshun_btn","bisai_btn","wuziqi_btn","laizi_btn","xiaochou_btn","next_page_btn","notice_bg","notice_txt","gonggao_box","gold_txt","diamond_txt","name_txt","head_icon","vip_txt","touxiang_box","top_bar","rank_btn"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this.hall_bg_i(),this.bg_bottom_i(),this.shop_btn_i(),this.safe_btn_i(),this.kefu_btn_i(),this._Image1_i(),this.main_game_btn_i(),this.huanle_btn_i(),this.jinsanshun_btn_i(),this.bisai_btn_i(),this.wuziqi_btn_i(),this.laizi_btn_i(),this.xiaochou_btn_i(),this.next_page_btn_i(),this._Image2_i(),this.gonggao_box_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.top_bar_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this.rank_btn_i(),this._Image25_i(),this._Image26_i()];
	}
	var _proto = hall.prototype;

	_proto.hall_bg_i = function () {
		var t = new eui.Image();
		this.hall_bg = t;
		t.height = 1080;
		t.source = "hall_bg_png";
		t.width = 1920;
		t.x = 0;
		t.y = 8;
		return t;
	};
	_proto.bg_bottom_i = function () {
		var t = new eui.Image();
		this.bg_bottom = t;
		t.source = "hall_json.bg_bottom";
		t.x = 0;
		t.y = 958;
		return t;
	};
	_proto.shop_btn_i = function () {
		var t = new eui.Image();
		this.shop_btn = t;
		t.source = "hall_json.shop_btn";
		t.x = 1546;
		t.y = 902;
		return t;
	};
	_proto.safe_btn_i = function () {
		var t = new eui.Image();
		this.safe_btn = t;
		t.source = "hall_json.safe_btn";
		t.x = 743.5;
		t.y = 960;
		return t;
	};
	_proto.kefu_btn_i = function () {
		var t = new eui.Image();
		this.kefu_btn = t;
		t.source = "hall_json.kefu_btn";
		t.x = 1304.5;
		t.y = 957;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "setting_btn_png";
		t.x = 2158;
		t.y = 1017;
		return t;
	};
	_proto.main_game_btn_i = function () {
		var t = new eui.Image();
		this.main_game_btn = t;
		t.source = "hall_json.main_game_btn";
		t.width = 535;
		t.x = 624.5;
		t.y = 153.49;
		return t;
	};
	_proto.huanle_btn_i = function () {
		var t = new eui.Image();
		this.huanle_btn = t;
		t.source = "hall_json.huanle_btn";
		t.x = 1160.1;
		t.y = 145.49;
		return t;
	};
	_proto.jinsanshun_btn_i = function () {
		var t = new eui.Image();
		this.jinsanshun_btn = t;
		t.source = "hall_json.jinsanshun_btn";
		t.x = 981;
		t.y = 248;
		return t;
	};
	_proto.bisai_btn_i = function () {
		var t = new eui.Image();
		this.bisai_btn = t;
		t.source = "hall_json.bisai_btn";
		t.x = 157.73;
		t.y = 133.49;
		return t;
	};
	_proto.wuziqi_btn_i = function () {
		var t = new eui.Image();
		this.wuziqi_btn = t;
		t.source = "hall_json.wuziqi_btn";
		t.x = 554;
		t.y = 538;
		return t;
	};
	_proto.laizi_btn_i = function () {
		var t = new eui.Image();
		this.laizi_btn = t;
		t.source = "hall_json.laizi_btn";
		t.x = 981;
		t.y = 550;
		return t;
	};
	_proto.xiaochou_btn_i = function () {
		var t = new eui.Image();
		this.xiaochou_btn = t;
		t.source = "hall_json.xiaochou_btn";
		t.x = 1411;
		t.y = 550;
		return t;
	};
	_proto.next_page_btn_i = function () {
		var t = new eui.Image();
		this.next_page_btn = t;
		t.source = "next_page_btn_png";
		t.x = 2188;
		t.y = 551;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "notice_bg_png";
		t.x = 800;
		t.y = 188;
		return t;
	};
	_proto.gonggao_box_i = function () {
		var t = new eui.Group();
		this.gonggao_box = t;
		t.visible = false;
		t.x = 537.5;
		t.y = 107.33;
		t.elementsContent = [this.notice_bg_i(),this._Image3_i(),this.notice_txt_i()];
		return t;
	};
	_proto.notice_bg_i = function () {
		var t = new eui.Image();
		this.notice_bg = t;
		t.source = "hall_json.notice_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.notice";
		t.x = 36;
		t.y = 14.5;
		return t;
	};
	_proto.notice_txt_i = function () {
		var t = new eui.Label();
		this.notice_txt = t;
		t.height = 33;
		t.size = 32;
		t.text = "尊敬的玩家：如果您在游戏中遇到任何问题,请...";
		t.width = 668;
		t.x = 117.5;
		t.y = 23;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.jiujijin_btn";
		t.x = 436.03;
		t.y = 964;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.zhuce_btn";
		t.x = 155.5;
		t.y = 963;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.tixian_btn";
		t.x = 1044;
		t.y = 961;
		return t;
	};
	_proto.top_bar_i = function () {
		var t = new eui.Group();
		this.top_bar = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this.gold_txt_i(),this.diamond_txt_i(),this.touxiang_box_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.dingbudi";
		t.x = 212;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.dikuang";
		t.x = 559;
		t.y = 24;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 68;
		t.source = "hall_json.dikuang";
		t.width = 355;
		t.x = 1020;
		t.y = 29;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.gold_icon";
		t.x = 547.03;
		t.y = 31.06;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.diamond_icon";
		t.x = 994;
		t.y = 21;
		return t;
	};
	_proto.gold_txt_i = function () {
		var t = new eui.Label();
		this.gold_txt = t;
		t.height = 36;
		t.size = 46;
		t.text = "98300";
		t.width = 139;
		t.x = 695;
		t.y = 45;
		return t;
	};
	_proto.diamond_txt_i = function () {
		var t = new eui.Label();
		this.diamond_txt = t;
		t.height = 34;
		t.size = 46;
		t.text = "35";
		t.width = 100;
		t.x = 1175;
		t.y = 46;
		return t;
	};
	_proto.touxiang_box_i = function () {
		var t = new eui.Group();
		this.touxiang_box = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image12_i(),this.name_txt_i(),this.head_icon_i(),this._Image13_i(),this.vip_txt_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.dingbuzuo";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.name_txt_i = function () {
		var t = new eui.Label();
		this.name_txt = t;
		t.height = 36;
		t.size = 38;
		t.text = "游客123456";
		t.width = 229;
		t.x = 258.21;
		t.y = 6.73;
		return t;
	};
	_proto.head_icon_i = function () {
		var t = new eui.Image();
		this.head_icon = t;
		t.source = "hall_json.head_icon";
		t.width = 95;
		t.x = 137.39;
		t.y = -1.89;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.vip_bg";
		t.x = 249.12;
		t.y = 54.23;
		return t;
	};
	_proto.vip_txt_i = function () {
		var t = new eui.Label();
		this.vip_txt = t;
		t.bold = true;
		t.height = 23;
		t.size = 28;
		t.text = "V7";
		t.textAlign = "left";
		t.width = 53;
		t.x = 319.69;
		t.y = 64.73;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.active_btn";
		t.x = 1454;
		t.y = 21;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.source = "hall_json.notice_btn";
		t.width = 87;
		t.x = 1762.12;
		t.y = 23;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 87;
		t.source = "hall_json.tequan_btn";
		t.width = 80;
		t.x = 1607;
		t.y = 20;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.jiaqian_btn";
		t.x = 855;
		t.y = 32;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.jiaqian_btn";
		t.x = 1302;
		t.y = 32;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.more_btn";
		t.x = 1139.25;
		t.y = 577.49;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.shuxian";
		t.x = 723;
		t.y = 958;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.shuxian";
		t.x = 1028;
		t.y = 958;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.shuxian";
		t.x = 1280;
		t.y = 958;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.shuxian";
		t.x = 402.5;
		t.y = 958;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.source = "hall_json.paifangbangdibu";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rank_btn_i = function () {
		var t = new eui.Image();
		this.rank_btn = t;
		t.source = "hall_json.rank_btn";
		t.x = 25;
		t.y = 153.49;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.paihangkuang";
		t.x = 8.91;
		t.y = 278.79;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "hall_json.paihangtouxiang";
		t.x = 7.85;
		t.y = 280.97;
		return t;
	};
	return hall;
})(eui.Skin);generateEUI.paths['resource/scene/login.exml'] = window.loading = (function (_super) {
	__extends(loading, _super);
	function loading() {
		_super.call(this);
		this.skinParts = ["login_btn","account","password"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Label1_i(),this._Label2_i(),this._Image4_i(),this._Image5_i(),this.login_btn_i(),this.account_i(),this.password_i(),this._Image6_i()];
	}
	var _proto = loading.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "login_json.login_dark_bg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "login_json.popup_window";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "login_json.login_icon";
		t.x = 648;
		t.y = 224;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 58;
		t.size = 46;
		t.text = "手机号：";
		t.textAlign = "right";
		t.width = 258;
		t.x = 460.58;
		t.y = 361.28;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimSun";
		t.height = 58;
		t.size = 46;
		t.text = "验证码：";
		t.textAlign = "right";
		t.width = 258;
		t.x = 460.58;
		t.y = 491.28;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "login_json.kuang_bg";
		t.x = 718.58;
		t.y = 334.78;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "login_json.kuang_bg";
		t.x = 718.58;
		t.y = 464.78;
		return t;
	};
	_proto.login_btn_i = function () {
		var t = new eui.Image();
		this.login_btn = t;
		t.horizontalCenter = 0;
		t.source = "login_json.login_btn";
		t.y = 662.68;
		return t;
	};
	_proto.account_i = function () {
		var t = new eui.TextInput();
		this.account = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 92;
		t.width = 488;
		t.x = 741.58;
		t.y = 343.28;
		return t;
	};
	_proto.password_i = function () {
		var t = new eui.TextInput();
		this.password = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.width = 492;
		t.x = 741.58;
		t.y = 475.28;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "login_json.huoqu_btn";
		t.x = 1295.58;
		t.y = 472.28;
		return t;
	};
	return loading;
})(eui.Skin);generateEUI.paths['resource/scene/loginPage.exml'] = window.loading = (function (_super) {
	__extends(loading, _super);
	function loading() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1125;
		this.width = 2436;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
	}
	var _proto = loading.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "login_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "logo_png";
		t.x = 1037;
		t.y = 136;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "weixin_png";
		t.x = 537;
		t.y = 765;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "phone_png";
		t.x = 1464;
		t.y = 765;
		return t;
	};
	return loading;
})(eui.Skin);generateEUI.paths['resource/scene/lose.exml'] = window.winGame = (function (_super) {
	__extends(winGame, _super);
	var winGame$Skin28 = 	(function (_super) {
		__extends(winGame$Skin28, _super);
		function winGame$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = winGame$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesuan_json.继续游戏";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return winGame$Skin28;
	})(eui.Skin);

	var winGame$Skin29 = 	(function (_super) {
		__extends(winGame$Skin29, _super);
		function winGame$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = winGame$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesuan_json.返回大厅";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return winGame$Skin29;
	})(eui.Skin);

	function winGame() {
		_super.call(this);
		this.skinParts = ["winImg","continue_btn","leave_btn","nickName_txt_1","times_txt_1","gold_txt_1","nickName_txt_0","times_txt_0","gold_txt_0","nickName_txt_2","times_txt_2","gold_txt_2"];
		
		this.height = 1020;
		this.width = 1980;
		this.elementsContent = [this._Image1_i(),this.winImg_i(),this.continue_btn_i(),this.leave_btn_i(),this.nickName_txt_1_i(),this.times_txt_1_i(),this.gold_txt_1_i(),this.nickName_txt_0_i(),this.times_txt_0_i(),this.gold_txt_0_i(),this.nickName_txt_2_i(),this.times_txt_2_i(),this.gold_txt_2_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
	}
	var _proto = winGame.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiesuan_json.losedikuang";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winImg_i = function () {
		var t = new eui.Image();
		this.winImg = t;
		t.fillMode = "repeat";
		t.source = "jiesuan_json.你赢了";
		t.x = 517;
		t.y = 66;
		return t;
	};
	_proto.continue_btn_i = function () {
		var t = new eui.Button();
		this.continue_btn = t;
		t.label = "";
		t.x = 1092.45;
		t.y = 668.04;
		t.skinName = winGame$Skin28;
		return t;
	};
	_proto.leave_btn_i = function () {
		var t = new eui.Button();
		this.leave_btn = t;
		t.label = "";
		t.x = 555.36;
		t.y = 668.04;
		t.skinName = winGame$Skin29;
		return t;
	};
	_proto.nickName_txt_1_i = function () {
		var t = new eui.Label();
		this.nickName_txt_1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "玩家1";
		t.textAlign = "center";
		t.textColor = 0xefefef;
		t.width = 264;
		t.x = 443.15;
		t.y = 429.4;
		return t;
	};
	_proto.times_txt_1_i = function () {
		var t = new eui.Label();
		this.times_txt_1 = t;
		t.bold = true;
		t.size = 40;
		t.text = "1";
		t.textColor = 0xefefef;
		t.x = 978.15;
		t.y = 429.4;
		return t;
	};
	_proto.gold_txt_1_i = function () {
		var t = new eui.Label();
		this.gold_txt_1 = t;
		t.bold = true;
		t.size = 40;
		t.text = "金币数";
		t.textColor = 0xefefef;
		t.x = 1334.97;
		t.y = 429.4;
		return t;
	};
	_proto.nickName_txt_0_i = function () {
		var t = new eui.Label();
		this.nickName_txt_0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "玩家1";
		t.textAlign = "center";
		t.textColor = 0xEFEFEF;
		t.width = 264;
		t.x = 443.15;
		t.y = 509.4;
		return t;
	};
	_proto.times_txt_0_i = function () {
		var t = new eui.Label();
		this.times_txt_0 = t;
		t.bold = true;
		t.size = 40;
		t.text = "1";
		t.textColor = 0xEFEFEF;
		t.x = 978.15;
		t.y = 509.4;
		return t;
	};
	_proto.gold_txt_0_i = function () {
		var t = new eui.Label();
		this.gold_txt_0 = t;
		t.bold = true;
		t.size = 40;
		t.text = "金币数";
		t.textColor = 0xEFEFEF;
		t.x = 1334.97;
		t.y = 509.4;
		return t;
	};
	_proto.nickName_txt_2_i = function () {
		var t = new eui.Label();
		this.nickName_txt_2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "玩家1";
		t.textAlign = "center";
		t.textColor = 0xEFEFEF;
		t.width = 264;
		t.x = 443.21;
		t.y = 591.4;
		return t;
	};
	_proto.times_txt_2_i = function () {
		var t = new eui.Label();
		this.times_txt_2 = t;
		t.bold = true;
		t.size = 40;
		t.text = "1";
		t.textColor = 0xEFEFEF;
		t.x = 978.21;
		t.y = 591.4;
		return t;
	};
	_proto.gold_txt_2_i = function () {
		var t = new eui.Label();
		this.gold_txt_2 = t;
		t.bold = true;
		t.size = 40;
		t.text = "金币数";
		t.textColor = 0xEFEFEF;
		t.x = 1335.03;
		t.y = 591.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "jiesuan_json.玩家";
		t.x = 526.15;
		t.y = 329.4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "jiesuan_json.倍数";
		t.x = 939.15;
		t.y = 329.4;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "jiesuan_json.金币";
		t.x = 1351.15;
		t.y = 330.4;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "jiesuan_json.dizhushu";
		t.x = 123;
		t.y = 173;
		return t;
	};
	return winGame;
})(eui.Skin);generateEUI.paths['resource/scene/mask.exml'] = window.mask = (function (_super) {
	__extends(mask, _super);
	function mask() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = mask.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x000000;
		t.height = 750;
		t.strokeAlpha = 0.6;
		t.strokeColor = 0x000000;
		t.width = 1334;
		t.y = 0;
		return t;
	};
	return mask;
})(eui.Skin);generateEUI.paths['resource/scene/matchEnd.exml'] = window.$exmlClass30 = (function (_super) {
	__extends($exmlClass30, _super);
	var $exmlClass30$Skin31 = 	(function (_super) {
		__extends($exmlClass30$Skin31, _super);
		function $exmlClass30$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass30$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "leave_match_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass30$Skin31;
	})(eui.Skin);

	var $exmlClass30$Skin32 = 	(function (_super) {
		__extends($exmlClass30$Skin32, _super);
		function $exmlClass30$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass30$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "continue_match_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass30$Skin32;
	})(eui.Skin);

	function $exmlClass30() {
		_super.call(this);
		this.skinParts = ["leave_btn","continue_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.leave_btn_i(),this.continue_btn_i(),this._Image1_i()];
	}
	var _proto = $exmlClass30.prototype;

	_proto.leave_btn_i = function () {
		var t = new eui.Button();
		this.leave_btn = t;
		t.label = "";
		t.x = 318;
		t.y = 388;
		t.skinName = $exmlClass30$Skin31;
		return t;
	};
	_proto.continue_btn_i = function () {
		var t = new eui.Button();
		this.continue_btn = t;
		t.label = "";
		t.x = 713;
		t.y = 388;
		t.skinName = $exmlClass30$Skin32;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "nomatch_png";
		t.width = 742;
		t.x = 296;
		t.y = 232;
		return t;
	};
	return $exmlClass30;
})(eui.Skin);generateEUI.paths['resource/scene/niuniu/bottom_score.exml'] = window.hall = (function (_super) {
	__extends(hall, _super);
	var hall$Skin33 = 	(function (_super) {
		__extends(hall$Skin33, _super);
		function hall$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bottom_score_json.but_nn_df_return")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bottom_score_json.but_nn_df_return";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin33;
	})(eui.Skin);

	var hall$Skin34 = 	(function (_super) {
		__extends(hall$Skin34, _super);
		function hall$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bottom_score_json.but_nn_df_help")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bottom_score_json.but_nn_df_help";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin34;
	})(eui.Skin);

	var hall$Skin35 = 	(function (_super) {
		__extends(hall$Skin35, _super);
		function hall$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bottom_score_json.nn_df_add")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bottom_score_json.nn_df_add";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin35;
	})(eui.Skin);

	var hall$Skin36 = 	(function (_super) {
		__extends(hall$Skin36, _super);
		function hall$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bottom_score_json.quick_start")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bottom_score_json.quick_start";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin36;
	})(eui.Skin);

	var hall$Skin37 = 	(function (_super) {
		__extends(hall$Skin37, _super);
		function hall$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bottom_score_json.nn_df_01")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bottom_score_json.nn_df_01";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin37;
	})(eui.Skin);

	var hall$Skin38 = 	(function (_super) {
		__extends(hall$Skin38, _super);
		function hall$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bottom_score_json.nn_df_02")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bottom_score_json.nn_df_02";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin38;
	})(eui.Skin);

	var hall$Skin39 = 	(function (_super) {
		__extends(hall$Skin39, _super);
		function hall$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bottom_score_json.nn_df_03")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bottom_score_json.nn_df_03";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin39;
	})(eui.Skin);

	var hall$Skin40 = 	(function (_super) {
		__extends(hall$Skin40, _super);
		function hall$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bottom_score_json.nn_df_04")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bottom_score_json.nn_df_04";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin40;
	})(eui.Skin);

	function hall() {
		_super.call(this);
		this.skinParts = ["return_btn","tip_btn","fast_play_btn","playBtn_0","playBtn_1","playBtn_2","playBtn_3"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.return_btn_i(),this.tip_btn_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Button1_i(),this.fast_play_btn_i(),this.playBtn_0_i(),this.playBtn_1_i(),this.playBtn_2_i(),this.playBtn_3_i(),this._Label1_i(),this._Label2_i(),this._Image5_i(),this._Image6_i()];
	}
	var _proto = hall.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.source = "nn_df_bg_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.return_btn_i = function () {
		var t = new eui.Button();
		this.return_btn = t;
		t.label = "";
		t.x = 18;
		t.y = 10;
		t.skinName = hall$Skin33;
		return t;
	};
	_proto.tip_btn_i = function () {
		var t = new eui.Button();
		this.tip_btn = t;
		t.label = "";
		t.x = 180;
		t.y = 10;
		t.skinName = hall$Skin34;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bottom_score_json.nn_df_avatar";
		t.x = 57;
		t.y = 854;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "bottom_score_json.nn_df_avatar_pic";
		t.x = 76;
		t.y = 868;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "bottom_score_json.nn_df_bb";
		t.x = 585;
		t.y = 969;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 915;
		t.y = 968;
		t.skinName = hall$Skin35;
		return t;
	};
	_proto.fast_play_btn_i = function () {
		var t = new eui.Button();
		this.fast_play_btn = t;
		t.label = "";
		t.x = 1494;
		t.y = 931;
		t.skinName = hall$Skin36;
		return t;
	};
	_proto.playBtn_0_i = function () {
		var t = new eui.Button();
		this.playBtn_0 = t;
		t.label = "";
		t.x = 106;
		t.y = 226;
		t.skinName = hall$Skin37;
		return t;
	};
	_proto.playBtn_1_i = function () {
		var t = new eui.Button();
		this.playBtn_1 = t;
		t.label = "";
		t.x = 536;
		t.y = 226;
		t.skinName = hall$Skin38;
		return t;
	};
	_proto.playBtn_2_i = function () {
		var t = new eui.Button();
		this.playBtn_2 = t;
		t.label = "";
		t.x = 966;
		t.y = 226;
		t.skinName = hall$Skin39;
		return t;
	};
	_proto.playBtn_3_i = function () {
		var t = new eui.Button();
		this.playBtn_3 = t;
		t.label = "";
		t.x = 1395;
		t.y = 226;
		t.skinName = hall$Skin40;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 50;
		t.text = "7955.30";
		t.textAlign = "right";
		t.textColor = 0xfffb6b;
		t.x = 718;
		t.y = 983;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 50;
		t.text = "啊库娅";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.x = 281;
		t.y = 983;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "bottom_score_json.nn_df_gold";
		t.x = 579;
		t.y = 966;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "bottom_score_json.qznn_logo";
		t.x = 1610;
		t.y = 22;
		return t;
	};
	return hall;
})(eui.Skin);generateEUI.paths['resource/scene/niuniu/cardGroup.exml'] = window.cardGroup = (function (_super) {
	__extends(cardGroup, _super);
	function cardGroup() {
		_super.call(this);
		this.skinParts = ["card_0","card_1","card_2","card_3","card_4"];
		
		this.height = 223;
		this.width = 469;
		this.elementsContent = [this.card_0_i(),this.card_1_i(),this.card_2_i(),this.card_3_i(),this.card_4_i()];
	}
	var _proto = cardGroup.prototype;

	_proto.card_0_i = function () {
		var t = new eui.Image();
		this.card_0 = t;
		t.source = "niuniu_card_json.card_back";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.card_1_i = function () {
		var t = new eui.Image();
		this.card_1 = t;
		t.source = "niuniu_card_json.card_back";
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.card_2_i = function () {
		var t = new eui.Image();
		this.card_2 = t;
		t.source = "niuniu_card_json.card_back";
		t.x = 150;
		t.y = 0;
		return t;
	};
	_proto.card_3_i = function () {
		var t = new eui.Image();
		this.card_3 = t;
		t.source = "niuniu_card_json.card_back";
		t.x = 226;
		t.y = 0;
		return t;
	};
	_proto.card_4_i = function () {
		var t = new eui.Image();
		this.card_4 = t;
		t.source = "niuniu_card_json.card_back";
		t.x = 300.94;
		t.y = 0;
		return t;
	};
	return cardGroup;
})(eui.Skin);generateEUI.paths['resource/scene/niuniu/niuniuBattle.exml'] = window.niuniuBattle = (function (_super) {
	__extends(niuniuBattle, _super);
	var niuniuBattle$Skin41 = 	(function (_super) {
		__extends(niuniuBattle$Skin41, _super);
		function niuniuBattle$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_Have")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_Have";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin41;
	})(eui.Skin);

	var niuniuBattle$Skin42 = 	(function (_super) {
		__extends(niuniuBattle$Skin42, _super);
		function niuniuBattle$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_Not")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_Not";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin42;
	})(eui.Skin);

	var niuniuBattle$Skin43 = 	(function (_super) {
		__extends(niuniuBattle$Skin43, _super);
		function niuniuBattle$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_Swap")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_Swap";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin43;
	})(eui.Skin);

	var niuniuBattle$Skin44 = 	(function (_super) {
		__extends(niuniuBattle$Skin44, _super);
		function niuniuBattle$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_0x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_0x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin44;
	})(eui.Skin);

	var niuniuBattle$Skin45 = 	(function (_super) {
		__extends(niuniuBattle$Skin45, _super);
		function niuniuBattle$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_1x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_1x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin45;
	})(eui.Skin);

	var niuniuBattle$Skin46 = 	(function (_super) {
		__extends(niuniuBattle$Skin46, _super);
		function niuniuBattle$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_2x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_2x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin46;
	})(eui.Skin);

	var niuniuBattle$Skin47 = 	(function (_super) {
		__extends(niuniuBattle$Skin47, _super);
		function niuniuBattle$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_3x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_3x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin47;
	})(eui.Skin);

	var niuniuBattle$Skin48 = 	(function (_super) {
		__extends(niuniuBattle$Skin48, _super);
		function niuniuBattle$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_4x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_4x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin48;
	})(eui.Skin);

	var niuniuBattle$Skin49 = 	(function (_super) {
		__extends(niuniuBattle$Skin49, _super);
		function niuniuBattle$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_5x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_5x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin49;
	})(eui.Skin);

	var niuniuBattle$Skin50 = 	(function (_super) {
		__extends(niuniuBattle$Skin50, _super);
		function niuniuBattle$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_10x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_10x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin50;
	})(eui.Skin);

	var niuniuBattle$Skin51 = 	(function (_super) {
		__extends(niuniuBattle$Skin51, _super);
		function niuniuBattle$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_15x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_15x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin51;
	})(eui.Skin);

	var niuniuBattle$Skin52 = 	(function (_super) {
		__extends(niuniuBattle$Skin52, _super);
		function niuniuBattle$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_20x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_20x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin52;
	})(eui.Skin);

	var niuniuBattle$Skin53 = 	(function (_super) {
		__extends(niuniuBattle$Skin53, _super);
		function niuniuBattle$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","niuniukaiju_json.but_x_25x")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = niuniuBattle$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "niuniukaiju_json.but_x_25x";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return niuniuBattle$Skin53;
	})(eui.Skin);

	function niuniuBattle() {
		_super.call(this);
		this.skinParts = ["return_btn","card_0","card_1","card_2","card_3","card_4","player_group_0","no_btn","score1_btn","score2_btn","score3_btn","score4_btn","qz_btn_group","score5_btn","score10_btn","score15_btn","score20_btn","score25_btn","xiazhu_btn_group","result_txt","currentTime_txt","player_group_1","player_group_2","player_group_3","player_group_4","player_group_5"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.return_btn_i(),this.player_group_0_i(),this.qz_btn_group_i(),this.xiazhu_btn_group_i(),this._Group1_i(),this.result_txt_i(),this.currentTime_txt_i(),this.player_group_1_i(),this.player_group_2_i(),this.player_group_3_i(),this.player_group_4_i(),this.player_group_5_i()];
	}
	var _proto = niuniuBattle.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleY = 1;
		t.source = "BG_jpg";
		t.x = 0;
		t.y = -4;
		return t;
	};
	_proto.return_btn_i = function () {
		var t = new eui.Image();
		this.return_btn = t;
		t.source = "niuniukaiju_json.but_Unfold";
		t.x = 18;
		t.y = 10;
		return t;
	};
	_proto.player_group_0_i = function () {
		var t = new eui.Group();
		this.player_group_0 = t;
		t.anchorOffsetX = 239.39;
		t.anchorOffsetY = 30.3;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 781.3;
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i(),this.card_0_i(),this.card_1_i(),this.card_2_i(),this.card_3_i(),this.card_4_i(),this._Zhuangjia1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.visible = false;
		t.x = 794;
		t.y = 0;
		t.skinName = niuniuBattle$Skin41;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.visible = false;
		t.x = 794;
		t.y = 106;
		t.skinName = niuniuBattle$Skin42;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.visible = false;
		t.x = 794;
		t.y = 210;
		t.skinName = niuniuBattle$Skin43;
		return t;
	};
	_proto.card_0_i = function () {
		var t = new eui.Image();
		this.card_0 = t;
		t.source = "niuniu_card_json.101";
		t.visible = false;
		t.x = 222;
		t.y = 23;
		return t;
	};
	_proto.card_1_i = function () {
		var t = new eui.Image();
		this.card_1 = t;
		t.source = "niuniu_card_json.dianmond_king";
		t.visible = false;
		t.x = 319;
		t.y = 23;
		return t;
	};
	_proto.card_2_i = function () {
		var t = new eui.Image();
		this.card_2 = t;
		t.source = "niuniu_card_json.spade_queen";
		t.visible = false;
		t.x = 417;
		t.y = 23;
		return t;
	};
	_proto.card_3_i = function () {
		var t = new eui.Image();
		this.card_3 = t;
		t.source = "niuniu_card_json.dianmond_queen";
		t.visible = false;
		t.x = 514;
		t.y = 23;
		return t;
	};
	_proto.card_4_i = function () {
		var t = new eui.Image();
		this.card_4 = t;
		t.source = "niuniu_card_json.black_Joker";
		t.visible = false;
		t.x = 611;
		t.y = 23;
		return t;
	};
	_proto._Zhuangjia1_i = function () {
		var t = new Zhuangjia();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 316;
		t.name = "zhuangJia";
		t.width = 220;
		t.x = 0;
		t.y = 13;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.name = "tip_state";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniukaiju_json.nn_ready_1";
		t.visible = false;
		t.x = 64;
		t.y = 125;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.name = "result_state";
		t.source = "niuniukaiju_json.nn_n00";
		t.visible = false;
		t.x = 412.45;
		t.y = -115.11;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.name = "beishu_state";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniukaiju_json.x_25x";
		t.visible = false;
		t.x = 210;
		t.y = -7;
		return t;
	};
	_proto.qz_btn_group_i = function () {
		var t = new eui.Group();
		this.qz_btn_group = t;
		t.visible = false;
		t.x = 0;
		t.y = 843;
		t.elementsContent = [this._Image5_i(),this.no_btn_i(),this.score1_btn_i(),this.score2_btn_i(),this.score3_btn_i(),this.score4_btn_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "niuniukaiju_json.BB";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.no_btn_i = function () {
		var t = new eui.Button();
		this.no_btn = t;
		t.label = "";
		t.name = "0";
		t.x = 283;
		t.y = 103;
		t.skinName = niuniuBattle$Skin44;
		return t;
	};
	_proto.score1_btn_i = function () {
		var t = new eui.Button();
		this.score1_btn = t;
		t.label = "";
		t.name = "1";
		t.x = 563;
		t.y = 103;
		t.skinName = niuniuBattle$Skin45;
		return t;
	};
	_proto.score2_btn_i = function () {
		var t = new eui.Button();
		this.score2_btn = t;
		t.label = "";
		t.name = "2";
		t.x = 843;
		t.y = 103;
		t.skinName = niuniuBattle$Skin46;
		return t;
	};
	_proto.score3_btn_i = function () {
		var t = new eui.Button();
		this.score3_btn = t;
		t.label = "";
		t.name = "3";
		t.x = 1122;
		t.y = 103;
		t.skinName = niuniuBattle$Skin47;
		return t;
	};
	_proto.score4_btn_i = function () {
		var t = new eui.Button();
		this.score4_btn = t;
		t.label = "";
		t.name = "4";
		t.x = 1402;
		t.y = 103;
		t.skinName = niuniuBattle$Skin48;
		return t;
	};
	_proto.xiazhu_btn_group_i = function () {
		var t = new eui.Group();
		this.xiazhu_btn_group = t;
		t.visible = false;
		t.x = 0;
		t.y = 843;
		t.elementsContent = [this._Image6_i(),this.score5_btn_i(),this.score10_btn_i(),this.score15_btn_i(),this.score20_btn_i(),this.score25_btn_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "niuniukaiju_json.BB";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.score5_btn_i = function () {
		var t = new eui.Button();
		this.score5_btn = t;
		t.label = "";
		t.name = "5";
		t.x = 283;
		t.y = 103;
		t.skinName = niuniuBattle$Skin49;
		return t;
	};
	_proto.score10_btn_i = function () {
		var t = new eui.Button();
		this.score10_btn = t;
		t.label = "";
		t.name = "10";
		t.x = 563;
		t.y = 103;
		t.skinName = niuniuBattle$Skin50;
		return t;
	};
	_proto.score15_btn_i = function () {
		var t = new eui.Button();
		this.score15_btn = t;
		t.label = "";
		t.name = "15";
		t.x = 843;
		t.y = 103;
		t.skinName = niuniuBattle$Skin51;
		return t;
	};
	_proto.score20_btn_i = function () {
		var t = new eui.Button();
		this.score20_btn = t;
		t.label = "";
		t.name = "20";
		t.x = 1122;
		t.y = 103;
		t.skinName = niuniuBattle$Skin52;
		return t;
	};
	_proto.score25_btn_i = function () {
		var t = new eui.Button();
		this.score25_btn = t;
		t.label = "";
		t.name = "25";
		t.x = 1402;
		t.y = 103;
		t.skinName = niuniuBattle$Skin53;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 641;
		t.y = 610;
		t.elementsContent = [this._Image7_i(),this._Label1_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "niuniukaiju_json.txt_cc";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "请下注：12";
		t.textAlign = "center";
		t.x = 210;
		t.y = 37;
		return t;
	};
	_proto.result_txt_i = function () {
		var t = new eui.Label();
		this.result_txt = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 46;
		t.text = "5+12+1+6=牛牛";
		t.textAlign = "center";
		t.textColor = 0xffff00;
		t.visible = false;
		t.x = 778;
		t.y = 712;
		return t;
	};
	_proto.currentTime_txt_i = function () {
		var t = new eui.Label();
		this.currentTime_txt = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "倒计时：04秒";
		t.textAlign = "center";
		t.textColor = 0xFFFF00;
		t.visible = false;
		t.y = 370.48;
		return t;
	};
	_proto.player_group_1_i = function () {
		var t = new eui.Group();
		this.player_group_1 = t;
		t.anchorOffsetX = 300;
		t.anchorOffsetY = 0;
		t.visible = false;
		t.x = 318.89;
		t.y = 152;
		t.elementsContent = [this._Zhuangjia2_i(),this._CardGroup1_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Zhuangjia2_i = function () {
		var t = new Zhuangjia();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 316;
		t.name = "zhuangJia";
		t.width = 220;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._CardGroup1_i = function () {
		var t = new CardGroup();
		t.height = 223;
		t.name = "cardGroup";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.visible = false;
		t.width = 469;
		t.x = 229;
		t.y = 31;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.name = "result_state";
		t.source = "niuniukaiju_json.nn_n09";
		t.visible = false;
		t.x = 393.18;
		t.y = 62.06;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.name = "tip_state";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniukaiju_json.nn_ready_1";
		t.visible = false;
		t.x = 64;
		t.y = 114;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.name = "beishu_state";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniukaiju_json.x_10x";
		t.visible = false;
		t.x = 210;
		t.y = -7;
		return t;
	};
	_proto.player_group_2_i = function () {
		var t = new eui.Group();
		this.player_group_2 = t;
		t.anchorOffsetX = 339.4;
		t.anchorOffsetY = 0;
		t.visible = false;
		t.x = 1551.4;
		t.y = 152;
		t.elementsContent = [this._Zhuangjia3_i(),this._CardGroup2_i(),this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Zhuangjia3_i = function () {
		var t = new Zhuangjia();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 316;
		t.name = "zhuangJia";
		t.width = 220;
		t.x = 456;
		t.y = 0;
		return t;
	};
	_proto._CardGroup2_i = function () {
		var t = new CardGroup();
		t.height = 223;
		t.name = "cardGroup";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.visible = false;
		t.width = 469;
		t.x = 100;
		t.y = 31;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.name = "result_state";
		t.source = "niuniukaiju_json.nn_n03";
		t.visible = false;
		t.x = 0;
		t.y = 56;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.name = "tip_state";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniukaiju_json.nn_ready_0";
		t.visible = false;
		t.x = 443;
		t.y = 114;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.name = "beishu_state";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniukaiju_json.x_0x";
		t.visible = false;
		t.x = 300;
		t.y = -7;
		return t;
	};
	_proto.player_group_3_i = function () {
		var t = new eui.Group();
		this.player_group_3 = t;
		t.anchorOffsetX = 381.82;
		t.anchorOffsetY = 109.09;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 119.59;
		t.elementsContent = [this._Zhuangjia4_i(),this._CardGroup3_i(),this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Zhuangjia4_i = function () {
		var t = new Zhuangjia();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 316;
		t.name = "zhuangJia";
		t.width = 220;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._CardGroup3_i = function () {
		var t = new CardGroup();
		t.height = 223;
		t.name = "cardGroup";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.visible = false;
		t.width = 469;
		t.x = 232;
		t.y = 22;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.name = "result_state";
		t.source = "niuniukaiju_json.nn_mn";
		t.visible = false;
		t.x = 208.51;
		t.y = 141;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.name = "beishu_state";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniukaiju_json.x_10x";
		t.visible = false;
		t.x = 210;
		t.y = -7;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.name = "tip_state";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniukaiju_json.nn_ready_1";
		t.visible = false;
		t.x = 64;
		t.y = 114;
		return t;
	};
	_proto.player_group_4_i = function () {
		var t = new eui.Group();
		this.player_group_4 = t;
		t.anchorOffsetX = 378.79;
		t.anchorOffsetY = 112.12;
		t.visible = false;
		t.x = 388.59;
		t.y = 632.12;
		t.elementsContent = [this._Zhuangjia5_i(),this._CardGroup4_i(),this._Image17_i(),this._Image18_i(),this._Image19_i()];
		return t;
	};
	_proto._Zhuangjia5_i = function () {
		var t = new Zhuangjia();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 316;
		t.name = "zhuangJia";
		t.width = 220;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._CardGroup4_i = function () {
		var t = new CardGroup();
		t.height = 223;
		t.name = "cardGroup";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.visible = false;
		t.width = 469;
		t.x = 229;
		t.y = 25;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.name = "result_state";
		t.source = "niuniukaiju_json.nn_n04";
		t.visible = false;
		t.x = 396.22;
		t.y = 39;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.name = "tip_state";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniukaiju_json.nn_ready_0";
		t.visible = false;
		t.x = 64;
		t.y = 114;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniukaiju_json.x_0x";
		t.visible = false;
		t.x = 210;
		t.y = -7;
		return t;
	};
	_proto.player_group_5_i = function () {
		var t = new eui.Group();
		this.player_group_5 = t;
		t.anchorOffsetX = 245.46;
		t.anchorOffsetY = 109.09;
		t.visible = false;
		t.x = 1460.14;
		t.y = 629.09;
		t.elementsContent = [this._Zhuangjia6_i(),this._CardGroup5_i(),this._Image20_i(),this._Image21_i(),this._Image22_i()];
		return t;
	};
	_proto._Zhuangjia6_i = function () {
		var t = new Zhuangjia();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 316;
		t.name = "zhuangJia";
		t.width = 220;
		t.x = 456;
		t.y = 0;
		return t;
	};
	_proto._CardGroup5_i = function () {
		var t = new CardGroup();
		t.height = 223;
		t.name = "cardGroup";
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.visible = false;
		t.width = 469;
		t.x = 100;
		t.y = 25;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.name = "result_state";
		t.source = "niuniukaiju_json.nn_n07";
		t.visible = false;
		t.x = 9.09;
		t.y = 39;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.name = "tip_state";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "niuniukaiju_json.nn_ready_0";
		t.visible = false;
		t.x = 443;
		t.y = 114;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.name = "beishu_state";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "niuniukaiju_json.x_10x";
		t.visible = false;
		t.x = 300;
		t.y = -7;
		return t;
	};
	return niuniuBattle;
})(eui.Skin);generateEUI.paths['resource/scene/niuniu/qznn_loading.exml'] = window.hall = (function (_super) {
	__extends(hall, _super);
	function hall() {
		_super.call(this);
		this.skinParts = ["loading_txt","loading_ani_point"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this.loading_txt_i(),this.loading_ani_point_i()];
	}
	var _proto = hall.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.source = "nn_lo_bg_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.loading_txt_i = function () {
		var t = new eui.Label();
		this.loading_txt = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 50;
		t.text = "加载中...";
		t.textAlign = "center";
		t.x = 868;
		t.y = 900;
		return t;
	};
	_proto.loading_ani_point_i = function () {
		var t = new eui.Rect();
		this.loading_ani_point = t;
		t.anchorOffsetX = 54;
		t.anchorOffsetY = 63;
		t.height = 126;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 108;
		t.y = 759.6;
		return t;
	};
	return hall;
})(eui.Skin);generateEUI.paths['resource/scene/niuniu/zhuangjia.exml'] = window.zhuangjia = (function (_super) {
	__extends(zhuangjia, _super);
	function zhuangjia() {
		_super.call(this);
		this.skinParts = ["di0","zhuangJia_logo","player_1"];
		
		this.height = 316;
		this.width = 220;
		this.elementsContent = [this.player_1_i()];
	}
	var _proto = zhuangjia.prototype;

	_proto.player_1_i = function () {
		var t = new eui.Group();
		this.player_1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.di0_i(),this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.zhuangJia_logo_i()];
		return t;
	};
	_proto.di0_i = function () {
		var t = new eui.Image();
		this.di0 = t;
		t.source = "niuniukaiju_json.Players";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "niuniukaiju_json.Avatar_QZNN";
		t.x = 5;
		t.y = 7;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 36;
		t.size = 30;
		t.text = "游客123456";
		t.textAlign = "center";
		t.textColor = 0xffe9c4;
		t.verticalAlign = "middle";
		t.width = 173;
		t.x = 24;
		t.y = 203;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 28.09;
		t.size = 30;
		t.text = "1.25万";
		t.textAlign = "right";
		t.textColor = 0xffff00;
		t.verticalAlign = "middle";
		t.width = 101;
		t.x = 91;
		t.y = 249;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "niuniukaiju_json.gold";
		t.x = 26;
		t.y = 250;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "niuniukaiju_json.Avatar_QZNN_1";
		t.x = 23;
		t.y = 21;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "niuniukaiju_json.banker_1";
		t.visible = false;
		t.x = 7;
		t.y = 5;
		return t;
	};
	_proto.zhuangJia_logo_i = function () {
		var t = new eui.Image();
		this.zhuangJia_logo = t;
		t.source = "niuniukaiju_json.banker";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return zhuangjia;
})(eui.Skin);generateEUI.paths['resource/scene/preGame.exml'] = window.TopHead = (function (_super) {
	__extends(TopHead, _super);
	var TopHead$Skin54 = 	(function (_super) {
		__extends(TopHead$Skin54, _super);
		function TopHead$Skin54() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Rect1_i(),this._Label1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = TopHead$Skin54.prototype;

		_proto._Rect1_i = function () {
			var t = new eui.Rect();
			t.fillColor = 0x43485d;
			t.height = 100;
			t.percentWidth = 100;
			return t;
		};
		_proto._Label1_i = function () {
			var t = new eui.Label();
			t.horizontalCenter = 0;
			t.size = 25;
			t.text = "立即回到房间";
			t.textColor = 0xcaab7d;
			t.verticalCenter = 0;
			return t;
		};
		return TopHead$Skin54;
	})(eui.Skin);

	function TopHead() {
		_super.call(this);
		this.skinParts = ["return_game_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = TopHead.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x000000;
		t.height = 750;
		t.strokeAlpha = 0.6;
		t.strokeColor = 0x000000;
		t.width = 1334;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 300;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 600;
		t.elementsContent = [this._Rect2_i(),this._Label1_i(),this.return_game_btn_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0x343849;
		t.height = 300;
		t.includeInLayout = true;
		t.width = 600;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.border = true;
		t.size = 27;
		t.text = "你还有游戏未结束";
		t.textColor = 0xffffff;
		t.x = 192;
		t.y = 83.33;
		return t;
	};
	_proto.return_game_btn_i = function () {
		var t = new eui.Button();
		this.return_game_btn = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.label = "Button";
		t.percentWidth = 100;
		t.y = 200;
		t.skinName = TopHead$Skin54;
		return t;
	};
	return TopHead;
})(eui.Skin);generateEUI.paths['resource/scene/recharge.exml'] = window.$exmlClass55 = (function (_super) {
	__extends($exmlClass55, _super);
	var $exmlClass55$Skin56 = 	(function (_super) {
		__extends($exmlClass55$Skin56, _super);
		function $exmlClass55$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","half_btn_y_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass55$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "half_btn_b_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass55$Skin56;
	})(eui.Skin);

	var $exmlClass55$Skin57 = 	(function (_super) {
		__extends($exmlClass55$Skin57, _super);
		function $exmlClass55$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","twice_btn_y_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass55$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "twice_btn_b_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass55$Skin57;
	})(eui.Skin);

	var $exmlClass55$Skin58 = 	(function (_super) {
		__extends($exmlClass55$Skin58, _super);
		function $exmlClass55$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","max_btn_y_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass55$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "max_btn_b_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass55$Skin58;
	})(eui.Skin);

	var $exmlClass55$Skin59 = 	(function (_super) {
		__extends($exmlClass55$Skin59, _super);
		function $exmlClass55$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass55$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "reset_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass55$Skin59;
	})(eui.Skin);

	var $exmlClass55$Skin60 = 	(function (_super) {
		__extends($exmlClass55$Skin60, _super);
		function $exmlClass55$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass55$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "recharge_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass55$Skin60;
	})(eui.Skin);

	var $exmlClass55$Skin61 = 	(function (_super) {
		__extends($exmlClass55$Skin61, _super);
		function $exmlClass55$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass55$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass55$Skin61;
	})(eui.Skin);

	function $exmlClass55() {
		_super.call(this);
		this.skinParts = ["num_8","num_10","num_0","num_1","num_2","num_3","num_4","num_5","num_6","num_7","key_board","tip_txt","recharge_txt","half_btn","twice_btn","max_btn","reset_btn","recharge_btn","close_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Rect1_i(),this._Group2_i()];
	}
	var _proto = $exmlClass55.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 750;
		t.strokeAlpha = 0.5;
		t.strokeColor = 0x000000;
		t.width = 1216;
		t.x = 118;
		t.y = 1;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 570;
		t.horizontalCenter = 0;
		t.width = 1100;
		t.y = 112;
		t.elementsContent = [this._Image1_i(),this.key_board_i(),this._Label1_i(),this.tip_txt_i(),this._Image2_i(),this._Group1_i(),this.reset_btn_i(),this._Image3_i(),this.recharge_btn_i(),this._Button1_i(),this.close_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 570;
		t.horizontalCenter = -1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recharge_bg_png";
		t.verticalCenter = 0;
		t.width = 1100;
		t.x = 19;
		t.y = -34;
		return t;
	};
	_proto.key_board_i = function () {
		var t = new eui.Group();
		this.key_board = t;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.horizontalCenter = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 880;
		t.x = 112;
		t.y = 317;
		t.elementsContent = [this.num_8_i(),this.num_10_i(),this.num_0_i(),this.num_1_i(),this.num_2_i(),this.num_3_i(),this.num_4_i(),this.num_5_i(),this.num_6_i(),this.num_7_i()];
		return t;
	};
	_proto.num_8_i = function () {
		var t = new eui.Label();
		this.num_8 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "1";
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.num_10_i = function () {
		var t = new eui.Label();
		this.num_10 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "2";
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 88;
		t.y = 0;
		return t;
	};
	_proto.num_0_i = function () {
		var t = new eui.Label();
		this.num_0 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "3";
		t.text = "3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 176;
		t.y = 0;
		return t;
	};
	_proto.num_1_i = function () {
		var t = new eui.Label();
		this.num_1 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "4";
		t.text = "4";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 264;
		t.y = 0;
		return t;
	};
	_proto.num_2_i = function () {
		var t = new eui.Label();
		this.num_2 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "5";
		t.text = "5";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 352;
		t.y = 0;
		return t;
	};
	_proto.num_3_i = function () {
		var t = new eui.Label();
		this.num_3 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "6";
		t.text = "6";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 440;
		t.y = 0;
		return t;
	};
	_proto.num_4_i = function () {
		var t = new eui.Label();
		this.num_4 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "7";
		t.text = "7";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 528;
		t.y = 0;
		return t;
	};
	_proto.num_5_i = function () {
		var t = new eui.Label();
		this.num_5 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "8";
		t.text = "8";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 616;
		t.y = 0;
		return t;
	};
	_proto.num_6_i = function () {
		var t = new eui.Label();
		this.num_6 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "9";
		t.text = "9";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 703;
		t.y = 0;
		return t;
	};
	_proto.num_7_i = function () {
		var t = new eui.Label();
		this.num_7 = t;
		t.background = true;
		t.backgroundColor = 0x081746;
		t.border = true;
		t.borderColor = 0xFFFFFF;
		t.height = 88;
		t.name = "0";
		t.text = "0";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 88;
		t.x = 791;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "充值后，可随时提现";
		t.textColor = 0xffffff;
		t.x = 744.88;
		t.y = 273;
		return t;
	};
	_proto.tip_txt_i = function () {
		var t = new eui.Label();
		this.tip_txt = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "EKT可用余额  1600";
		t.textColor = 0xffffff;
		t.width = 560;
		t.x = 180;
		t.y = 272;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 40;
		t.source = "left_ekt_png";
		t.width = 40;
		t.x = 130;
		t.y = 266;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 90;
		t.horizontalCenter = 0;
		t.width = 880;
		t.y = 149.18;
		t.elementsContent = [this._Rect2_i(),this._Label2_i(),this.recharge_txt_i(),this.half_btn_i(),this.twice_btn_i(),this.max_btn_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0x081746;
		t.height = 90;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 2;
		t.width = 880;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = -350;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "充值金额";
		t.textColor = 0x00c6ff;
		t.verticalCenter = 0;
		return t;
	};
	_proto.recharge_txt_i = function () {
		var t = new eui.Label();
		this.recharge_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.border = false;
		t.borderColor = 0xffffff;
		t.height = 67;
		t.horizontalCenter = -98.5;
		t.maxChars = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 44;
		t.text = "100000000";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -1.5;
		t.width = 333;
		return t;
	};
	_proto.half_btn_i = function () {
		var t = new eui.Button();
		this.half_btn = t;
		t.label = "";
		t.x = 583.27;
		t.y = 15;
		t.skinName = $exmlClass55$Skin56;
		return t;
	};
	_proto.twice_btn_i = function () {
		var t = new eui.Button();
		this.twice_btn = t;
		t.label = "";
		t.x = 681.64;
		t.y = 15;
		t.skinName = $exmlClass55$Skin57;
		return t;
	};
	_proto.max_btn_i = function () {
		var t = new eui.Button();
		this.max_btn = t;
		t.label = "";
		t.x = 778.88;
		t.y = 15;
		t.skinName = $exmlClass55$Skin58;
		return t;
	};
	_proto.reset_btn_i = function () {
		var t = new eui.Button();
		this.reset_btn = t;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 631;
		t.y = 172;
		t.skinName = $exmlClass55$Skin59;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recharge_label_png";
		t.width = 240;
		t.x = 430;
		t.y = 57;
		return t;
	};
	_proto.recharge_btn_i = function () {
		var t = new eui.Button();
		this.recharge_btn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 410;
		t.y = 405;
		t.skinName = $exmlClass55$Skin60;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1027;
		t.y = 62;
		t.skinName = $exmlClass55$Skin61;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Button();
		this.close_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102.78;
		t.label = "";
		t.width = 116;
		t.x = 1014.66;
		t.y = 3.9;
		return t;
	};
	return $exmlClass55;
})(eui.Skin);generateEUI.paths['resource/scene/record.exml'] = window.$exmlClass62 = (function (_super) {
	__extends($exmlClass62, _super);
	var $exmlClass62$Skin63 = 	(function (_super) {
		__extends($exmlClass62$Skin63, _super);
		function $exmlClass62$Skin63() {
			_super.call(this);
			this.skinParts = [];
			
			this.elementsContent = [this._Image1_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass62$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "goBack_png";
			t.percentWidth = 100;
			return t;
		};
		return $exmlClass62$Skin63;
	})(eui.Skin);

	function $exmlClass62() {
		_super.call(this);
		this.skinParts = ["return_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this.return_btn_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Scroller1_i()];
	}
	var _proto = $exmlClass62.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 750;
		t.source = "ground_bg_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.horizontalCenter = 64;
		t.size = 24;
		t.text = "没有更多记录了";
		t.textAlign = "center";
		t.textColor = 0xb5bede;
		t.verticalAlign = "middle";
		t.verticalCenter = 291;
		t.width = 294;
		return t;
	};
	_proto.return_btn_i = function () {
		var t = new eui.Button();
		this.return_btn = t;
		t.label = "Button";
		t.x = 40;
		t.y = 30;
		t.skinName = $exmlClass62$Skin63;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.horizontalCenter = 36;
		t.width = 1120;
		t.y = 106;
		t.elementsContent = [this._Rect1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xf0d885;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 49;
		t.size = 24;
		t.text = "身份";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 170;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 49;
		t.size = 24;
		t.text = "结果";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 340;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 49;
		t.size = 24;
		t.text = "底分";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 500;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 49;
		t.size = 24;
		t.text = "倍数";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 580;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 49;
		t.size = 24;
		t.text = "时间";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 916;
		t.y = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 49;
		t.size = 24;
		t.text = "金币EKT";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.x = 660;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.width = 1120;
		t.x = 143;
		t.y = 156;
		t.elementsContent = [this._Rect2_i(),this._Image2_i(),this._Image3_i(),this._Label8_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0x0d1b51;
		t.height = 110;
		t.strokeAlpha = 1;
		t.strokeColor = 0xf0d885;
		t.strokeWeight = 2;
		t.width = 1120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "farmer_head_png";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 34;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "farm_icon_png";
		t.verticalCenter = 0;
		t.width = 118;
		t.x = 126;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "失败";
		t.textAlign = "center";
		t.textColor = 0xb3b4b7;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 329;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.text = "10 / 24 / -240";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 500;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 24;
		t.text = "2019-3-4 16:24";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 813.5;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.width = 1120;
		t.x = 143;
		t.y = 276;
		t.elementsContent = [this._Rect3_i(),this._Image4_i(),this._Image5_i(),this._Label11_i(),this._Label12_i(),this._Label13_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0x0D1B51;
		t.height = 110;
		t.strokeAlpha = 1;
		t.strokeColor = 0xF0D885;
		t.strokeWeight = 2;
		t.width = 1120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "farmer_head_png";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 34;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "farm_icon_png";
		t.verticalCenter = 0;
		t.width = 118;
		t.x = 126;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "失败";
		t.textAlign = "center";
		t.textColor = 0xB3B4B7;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 329;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.text = "10 / 24 / -240";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 500;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 24;
		t.text = "2019-3-4 16:24";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 813.5;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.width = 1120;
		t.x = 143;
		t.y = 396;
		t.elementsContent = [this._Rect4_i(),this._Image6_i(),this._Image7_i(),this._Label14_i(),this._Label15_i(),this._Label16_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0x0D1B51;
		t.height = 110;
		t.strokeAlpha = 1;
		t.strokeColor = 0xF0D885;
		t.strokeWeight = 2;
		t.width = 1120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "farmer_head_png";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 34;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "farm_icon_png";
		t.verticalCenter = 0;
		t.width = 118;
		t.x = 126;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "失败";
		t.textAlign = "center";
		t.textColor = 0xB3B4B7;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 329;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.text = "10 / 24 / -240";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 500;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 24;
		t.text = "2019-3-4 16:24";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 813.5;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.width = 1120;
		t.x = 143;
		t.y = 516;
		t.elementsContent = [this._Rect5_i(),this._Image8_i(),this._Image9_i(),this._Label17_i(),this._Label18_i(),this._Label19_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0x0D1B51;
		t.height = 110;
		t.strokeAlpha = 1;
		t.strokeColor = 0xF0D885;
		t.strokeWeight = 2;
		t.width = 1120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "farmer_head_png";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 34;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "farm_icon_png";
		t.verticalCenter = 0;
		t.width = 118;
		t.x = 126;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "失败";
		t.textAlign = "center";
		t.textColor = 0xB3B4B7;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 329;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.text = "10 / 24 / -240";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 500;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 24;
		t.text = "2019-3-4 16:24";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 813.5;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 484;
		t.width = 1120;
		t.x = 143;
		t.y = 156;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		return t;
	};
	return $exmlClass62;
})(eui.Skin);generateEUI.paths['resource/scene/recordItem.exml'] = window.$exmlClass64 = (function (_super) {
	__extends($exmlClass64, _super);
	function $exmlClass64() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 120;
		this.width = 1120;
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = $exmlClass64.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 110;
		t.width = 1120;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0x0D1B51;
		t.height = 110;
		t.strokeAlpha = 1;
		t.strokeColor = 0xF0D885;
		t.strokeWeight = 2;
		t.width = 1120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.source = "farmer_head_png";
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 34;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "farm_icon_png";
		t.verticalCenter = 0;
		t.width = 118;
		t.x = 126;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "失败";
		t.textAlign = "center";
		t.textColor = 0xB3B4B7;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 329;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.text = "10 / 24 / -240";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 500;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32;
		t.size = 24;
		t.text = "2019-3-4 16:24";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 254;
		t.x = 813.5;
		return t;
	};
	return $exmlClass64;
})(eui.Skin);generateEUI.paths['resource/scene/register.exml'] = window.register = (function (_super) {
	__extends(register, _super);
	function register() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = register.prototype;

	return register;
})(eui.Skin);generateEUI.paths['resource/scene/room.exml'] = window.$exmlClass65 = (function (_super) {
	__extends($exmlClass65, _super);
	var $exmlClass65$Skin66 = 	(function (_super) {
		__extends($exmlClass65$Skin66, _super);
		function $exmlClass65$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","creat_room_btn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass65$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass65$Skin66;
	})(eui.Skin);

	var $exmlClass65$Skin67 = 	(function (_super) {
		__extends($exmlClass65$Skin67, _super);
		function $exmlClass65$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","join_room_btn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass65$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass65$Skin67;
	})(eui.Skin);

	var $exmlClass65$Skin68 = 	(function (_super) {
		__extends($exmlClass65$Skin68, _super);
		function $exmlClass65$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = $exmlClass65$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "close_btn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return $exmlClass65$Skin68;
	})(eui.Skin);

	function $exmlClass65() {
		_super.call(this);
		this.skinParts = ["close_btn","cash_txt","cash_txt0"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = $exmlClass65.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 470;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1080;
		t.elementsContent = [this._Image1_i(),this._ToggleButton1_i(),this._ToggleButton2_i(),this._Label1_i(),this.close_btn_i(),this._Rect1_i(),this.cash_txt_i(),this.cash_txt0_i(),this._Group1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 470;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "room_bg_png";
		t.verticalCenter = 0;
		t.width = 1080;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._ToggleButton1_i = function () {
		var t = new eui.ToggleButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "ToggleButton";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 220;
		t.x = 829;
		t.y = 119;
		t.skinName = $exmlClass65$Skin66;
		return t;
	};
	_proto._ToggleButton2_i = function () {
		var t = new eui.ToggleButton();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.label = "ToggleButton";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 220;
		t.x = 829;
		t.y = 277;
		t.skinName = $exmlClass65$Skin67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "设置底分";
		t.textColor = 0x722d00;
		t.x = 343;
		t.y = 60;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Button();
		this.close_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "";
		t.width = 36;
		t.x = 740.82;
		t.y = 40.52;
		t.skinName = $exmlClass65$Skin68;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0xffffff;
		t.height = 70;
		t.width = 600;
		t.x = 105;
		t.y = 130;
		return t;
	};
	_proto.cash_txt_i = function () {
		var t = new eui.Label();
		this.cash_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xffffff;
		t.border = false;
		t.borderColor = 0xFFFFFF;
		t.height = 70;
		t.horizontalCenter = -135;
		t.maxChars = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "100000000";
		t.textAlign = "center";
		t.textColor = 0xcecece;
		t.verticalAlign = "middle";
		t.width = 600;
		t.x = 104.99999999999999;
		t.y = 130;
		return t;
	};
	_proto.cash_txt0_i = function () {
		var t = new eui.Label();
		this.cash_txt0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = false;
		t.backgroundColor = 0xFFFFFF;
		t.bold = true;
		t.border = false;
		t.borderColor = 0xFFFFFF;
		t.height = 70;
		t.maxChars = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "低分设置越高，对好友进场的EKT余额要求越多";
		t.textAlign = "center";
		t.textColor = 0xd67620;
		t.verticalAlign = "middle";
		t.width = 600;
		t.x = 105;
		t.y = 207;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.x = 313;
		t.y = 317;
		t.elementsContent = [this._Rect2_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 8;
		t.ellipseWidth = 8;
		t.fillColor = 0xcecece;
		t.height = 60;
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 60;
		t.text = "创建房间";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 180;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return $exmlClass65;
})(eui.Skin);generateEUI.paths['resource/scene/root_hall.exml'] = window.hall = (function (_super) {
	__extends(hall, _super);
	var hall$Skin69 = 	(function (_super) {
		__extends(hall$Skin69, _super);
		function hall$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.hall_shop")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.hall_shop";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin69;
	})(eui.Skin);

	var hall$Skin70 = 	(function (_super) {
		__extends(hall$Skin70, _super);
		function hall$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.but_All_0")
					])
			];
		}
		var _proto = hall$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.but_All_1";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin70;
	})(eui.Skin);

	var hall$Skin71 = 	(function (_super) {
		__extends(hall$Skin71, _super);
		function hall$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.but_Fight_0")
					])
			];
		}
		var _proto = hall$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.but_Fight_0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin71;
	})(eui.Skin);

	var hall$Skin72 = 	(function (_super) {
		__extends(hall$Skin72, _super);
		function hall$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.but_Multi_0")
					])
			];
		}
		var _proto = hall$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.but_Multi_0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin72;
	})(eui.Skin);

	var hall$Skin73 = 	(function (_super) {
		__extends(hall$Skin73, _super);
		function hall$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.but_Multi_0")
					])
			];
		}
		var _proto = hall$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.but_Multi_0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin73;
	})(eui.Skin);

	var hall$Skin74 = 	(function (_super) {
		__extends(hall$Skin74, _super);
		function hall$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.but_Multi_0")
					])
			];
		}
		var _proto = hall$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.but_Multi_0";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin74;
	})(eui.Skin);

	var hall$Skin75 = 	(function (_super) {
		__extends(hall$Skin75, _super);
		function hall$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.bottom_xiaoxi")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.bottom_xiaoxi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin75;
	})(eui.Skin);

	var hall$Skin76 = 	(function (_super) {
		__extends(hall$Skin76, _super);
		function hall$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.bottom_paihang")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.bottom_paihang";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin76;
	})(eui.Skin);

	var hall$Skin77 = 	(function (_super) {
		__extends(hall$Skin77, _super);
		function hall$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.bottom_kefu")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.bottom_kefu";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin77;
	})(eui.Skin);

	var hall$Skin78 = 	(function (_super) {
		__extends(hall$Skin78, _super);
		function hall$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.hall_VIP")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.hall_VIP";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin78;
	})(eui.Skin);

	var hall$Skin79 = 	(function (_super) {
		__extends(hall$Skin79, _super);
		function hall$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.top_gonggao")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.top_gonggao";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin79;
	})(eui.Skin);

	var hall$Skin80 = 	(function (_super) {
		__extends(hall$Skin80, _super);
		function hall$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.top_huodong")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.top_huodong";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin80;
	})(eui.Skin);

	var hall$Skin81 = 	(function (_super) {
		__extends(hall$Skin81, _super);
		function hall$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.bottom_tixian")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.bottom_tixian";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin81;
	})(eui.Skin);

	var hall$Skin82 = 	(function (_super) {
		__extends(hall$Skin82, _super);
		function hall$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.But_add")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.But_add";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin82;
	})(eui.Skin);

	var hall$Skin83 = 	(function (_super) {
		__extends(hall$Skin83, _super);
		function hall$Skin83() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.Game_BRNN")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.Game_BRNN";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin83;
	})(eui.Skin);

	var hall$Skin84 = 	(function (_super) {
		__extends(hall$Skin84, _super);
		function hall$Skin84() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.But_Dow")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.But_Dow";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin84;
	})(eui.Skin);

	var hall$Skin85 = 	(function (_super) {
		__extends(hall$Skin85, _super);
		function hall$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.Game_QZNN")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.Game_QZNN";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin85;
	})(eui.Skin);

	var hall$Skin86 = 	(function (_super) {
		__extends(hall$Skin86, _super);
		function hall$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.Game_HKDDZ")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.Game_HKDDZ";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin86;
	})(eui.Skin);

	var hall$Skin87 = 	(function (_super) {
		__extends(hall$Skin87, _super);
		function hall$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.But_Dow")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.But_Dow";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin87;
	})(eui.Skin);

	var hall$Skin88 = 	(function (_super) {
		__extends(hall$Skin88, _super);
		function hall$Skin88() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.But_Dow")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.But_Dow";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin88;
	})(eui.Skin);

	var hall$Skin89 = 	(function (_super) {
		__extends(hall$Skin89, _super);
		function hall$Skin89() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.Game_BYDR")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.Game_BYDR";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin89;
	})(eui.Skin);

	var hall$Skin90 = 	(function (_super) {
		__extends(hall$Skin90, _super);
		function hall$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.But_Dow")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.But_Dow";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin90;
	})(eui.Skin);

	var hall$Skin91 = 	(function (_super) {
		__extends(hall$Skin91, _super);
		function hall$Skin91() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_hall_json.But_Dow")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = hall$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_hall_json.But_Dow";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return hall$Skin91;
	})(eui.Skin);

	function hall() {
		_super.call(this);
		this.skinParts = ["gold_txt","bairen_niuniu_btn","niuniu_btn","ddz_btn","buyu_btn"];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Image5_i(),this._Image6_i(),this._Button1_i(),this._Button2_i(),this._Button3_i(),this._Button4_i(),this._Button5_i(),this._Button6_i(),this._Button7_i(),this._Button8_i(),this._Button9_i(),this._Button10_i(),this._Button11_i(),this._Button12_i(),this._Button13_i(),this._Group2_i(),this._Label2_i(),this._Label3_i(),this.bairen_niuniu_btn_i(),this._Button15_i(),this.niuniu_btn_i(),this.ddz_btn_i(),this._Button16_i(),this._Button17_i(),this.buyu_btn_i(),this._Button18_i(),this._Button19_i()];
	}
	var _proto = hall.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "hall_BG_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 170;
		t.y = 537;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "root_hall_json.hall_fuchuang";
		t.x = 0;
		t.y = 168;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 93.99;
		t.size = 38;
		t.text = "全民推广，月入百万，点击 立即参与！";
		t.textAlign = "center";
		t.width = 399;
		t.x = 46.35;
		t.y = 202.64;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "root_hall_json.hall_fuchuang_0";
		t.x = 261.99;
		t.y = 315;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "root_hall_json.hall_fuchuang_1";
		t.x = 211.02;
		t.y = 315;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "hall_Roles_png";
		t.x = 245;
		t.y = 148;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "root_hall_json.Avatar";
		t.x = 11;
		t.y = 14;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1548;
		t.y = 938;
		t.skinName = hall$Skin69;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 85;
		t.label = "";
		t.x = 136;
		t.y = 534;
		t.skinName = hall$Skin70;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 85;
		t.label = "";
		t.x = 95.34;
		t.y = 352.72;
		t.skinName = hall$Skin71;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 85;
		t.label = "";
		t.x = -39;
		t.y = 213.99;
		t.skinName = hall$Skin72;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 85;
		t.label = "";
		t.x = -39;
		t.y = 853.33;
		t.skinName = hall$Skin73;
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 85;
		t.label = "";
		t.x = 95.34;
		t.y = 715.28;
		t.skinName = hall$Skin74;
		return t;
	};
	_proto._Button7_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 76;
		t.y = 948;
		t.skinName = hall$Skin75;
		return t;
	};
	_proto._Button8_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 359;
		t.y = 948;
		t.skinName = hall$Skin76;
		return t;
	};
	_proto._Button9_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 919;
		t.y = 948;
		t.skinName = hall$Skin77;
		return t;
	};
	_proto._Button10_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1706;
		t.y = 9;
		t.skinName = hall$Skin78;
		return t;
	};
	_proto._Button11_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1306;
		t.y = 9;
		t.skinName = hall$Skin79;
		return t;
	};
	_proto._Button12_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1022;
		t.y = 9;
		t.skinName = hall$Skin80;
		return t;
	};
	_proto._Button13_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 642;
		t.y = 948;
		t.skinName = hall$Skin81;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 552;
		t.y = 18;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Button14_i(),this.gold_txt_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "root_hall_json.hall_heidi";
		t.x = 6;
		t.y = 3;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "root_hall_json.hall_Glod";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button14_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 336;
		t.y = 2;
		t.skinName = hall$Skin82;
		return t;
	};
	_proto.gold_txt_i = function () {
		var t = new eui.Label();
		this.gold_txt = t;
		t.size = 38;
		t.text = "17885.10";
		t.textAlign = "right";
		t.textColor = 0xffff00;
		t.x = 161.67;
		t.y = 19.33;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 38;
		t.text = "阿库";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.x = 163;
		t.y = 24;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 38;
		t.text = "ID：215755";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 164;
		t.y = 84;
		return t;
	};
	_proto.bairen_niuniu_btn_i = function () {
		var t = new eui.Button();
		this.bairen_niuniu_btn = t;
		t.label = "";
		t.x = 1102;
		t.y = 111;
		t.skinName = hall$Skin83;
		return t;
	};
	_proto._Button15_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1275;
		t.y = 667;
		t.skinName = hall$Skin84;
		return t;
	};
	_proto.niuniu_btn_i = function () {
		var t = new eui.Button();
		this.niuniu_btn = t;
		t.label = "";
		t.x = 669;
		t.y = 111;
		t.skinName = hall$Skin85;
		return t;
	};
	_proto.ddz_btn_i = function () {
		var t = new eui.Button();
		this.ddz_btn = t;
		t.label = "";
		t.x = 1102;
		t.y = 496;
		t.skinName = hall$Skin86;
		return t;
	};
	_proto._Button16_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.visible = false;
		t.x = 1280;
		t.y = 269;
		t.skinName = hall$Skin87;
		return t;
	};
	_proto._Button17_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.visible = false;
		t.x = 1280;
		t.y = 667;
		t.skinName = hall$Skin88;
		return t;
	};
	_proto.buyu_btn_i = function () {
		var t = new eui.Button();
		this.buyu_btn = t;
		t.label = "";
		t.x = 669;
		t.y = 496;
		t.skinName = hall$Skin89;
		return t;
	};
	_proto._Button18_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.visible = false;
		t.x = 842;
		t.y = 669;
		t.skinName = hall$Skin90;
		return t;
	};
	_proto._Button19_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.visible = false;
		t.x = 842;
		t.y = 269;
		t.skinName = hall$Skin91;
		return t;
	};
	return hall;
})(eui.Skin);generateEUI.paths['resource/scene/root.exml'] = window.root = (function (_super) {
	__extends(root, _super);
	var root$Skin92 = 	(function (_super) {
		__extends(root$Skin92, _super);
		function root$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_KF")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_KF";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin92;
	})(eui.Skin);

	var root$Skin93 = 	(function (_super) {
		__extends(root$Skin93, _super);
		function root$Skin93() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_YKDL")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_YKDL";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin93;
	})(eui.Skin);

	var root$Skin94 = 	(function (_super) {
		__extends(root$Skin94, _super);
		function root$Skin94() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_QBZH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_QBZH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin94;
	})(eui.Skin);

	var root$Skin95 = 	(function (_super) {
		__extends(root$Skin95, _super);
		function root$Skin95() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_ZHDL")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_ZHDL";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin95;
	})(eui.Skin);

	var root$Skin96 = 	(function (_super) {
		__extends(root$Skin96, _super);
		function root$Skin96() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin96;
	})(eui.Skin);

	var root$Skin97 = 	(function (_super) {
		__extends(root$Skin97, _super);
		function root$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_WJMM")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_WJMM";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin97;
	})(eui.Skin);

	var root$Skin98 = 	(function (_super) {
		__extends(root$Skin98, _super);
		function root$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_LJDL")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_LJDL";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin98;
	})(eui.Skin);

	var root$Skin99 = 	(function (_super) {
		__extends(root$Skin99, _super);
		function root$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin99;
	})(eui.Skin);

	var root$Skin100 = 	(function (_super) {
		__extends(root$Skin100, _super);
		function root$Skin100() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_QX")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_QX";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin100;
	})(eui.Skin);

	var root$Skin101 = 	(function (_super) {
		__extends(root$Skin101, _super);
		function root$Skin101() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_QD")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_QD";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin101;
	})(eui.Skin);

	var root$Skin102 = 	(function (_super) {
		__extends(root$Skin102, _super);
		function root$Skin102() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin102;
	})(eui.Skin);

	var root$Skin103 = 	(function (_super) {
		__extends(root$Skin103, _super);
		function root$Skin103() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_QD")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_QD";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin103;
	})(eui.Skin);

	var root$Skin104 = 	(function (_super) {
		__extends(root$Skin104, _super);
		function root$Skin104() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_HQ")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_HQ";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin104;
	})(eui.Skin);

	var root$Skin105 = 	(function (_super) {
		__extends(root$Skin105, _super);
		function root$Skin105() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin105;
	})(eui.Skin);

	var root$Skin106 = 	(function (_super) {
		__extends(root$Skin106, _super);
		function root$Skin106() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_GUAN")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_GUAN";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin106;
	})(eui.Skin);

	var root$Skin107 = 	(function (_super) {
		__extends(root$Skin107, _super);
		function root$Skin107() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_KAI")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_KAI";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin107;
	})(eui.Skin);

	var root$Skin108 = 	(function (_super) {
		__extends(root$Skin108, _super);
		function root$Skin108() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin108;
	})(eui.Skin);

	var root$Skin109 = 	(function (_super) {
		__extends(root$Skin109, _super);
		function root$Skin109() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_QD")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_QD";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin109;
	})(eui.Skin);

	var root$Skin110 = 	(function (_super) {
		__extends(root$Skin110, _super);
		function root$Skin110() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin110;
	})(eui.Skin);

	var root$Skin111 = 	(function (_super) {
		__extends(root$Skin111, _super);
		function root$Skin111() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_LJBD")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_LJBD";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin111;
	})(eui.Skin);

	var root$Skin112 = 	(function (_super) {
		__extends(root$Skin112, _super);
		function root$Skin112() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin112;
	})(eui.Skin);

	var root$Skin113 = 	(function (_super) {
		__extends(root$Skin113, _super);
		function root$Skin113() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin113;
	})(eui.Skin);

	var root$Skin114 = 	(function (_super) {
		__extends(root$Skin114, _super);
		function root$Skin114() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin114;
	})(eui.Skin);

	var root$Skin115 = 	(function (_super) {
		__extends(root$Skin115, _super);
		function root$Skin115() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin115;
	})(eui.Skin);

	var root$Skin116 = 	(function (_super) {
		__extends(root$Skin116, _super);
		function root$Skin116() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin116;
	})(eui.Skin);

	var root$Skin117 = 	(function (_super) {
		__extends(root$Skin117, _super);
		function root$Skin117() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin117;
	})(eui.Skin);

	var root$Skin118 = 	(function (_super) {
		__extends(root$Skin118, _super);
		function root$Skin118() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin118;
	})(eui.Skin);

	var root$Skin119 = 	(function (_super) {
		__extends(root$Skin119, _super);
		function root$Skin119() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin119.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin119;
	})(eui.Skin);

	var root$Skin120 = 	(function (_super) {
		__extends(root$Skin120, _super);
		function root$Skin120() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin120.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin120;
	})(eui.Skin);

	var root$Skin121 = 	(function (_super) {
		__extends(root$Skin121, _super);
		function root$Skin121() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin121.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin121;
	})(eui.Skin);

	var root$Skin122 = 	(function (_super) {
		__extends(root$Skin122, _super);
		function root$Skin122() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin122.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin122;
	})(eui.Skin);

	var root$Skin123 = 	(function (_super) {
		__extends(root$Skin123, _super);
		function root$Skin123() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin123.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin123;
	})(eui.Skin);

	var root$Skin124 = 	(function (_super) {
		__extends(root$Skin124, _super);
		function root$Skin124() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin124.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin124;
	})(eui.Skin);

	var root$Skin125 = 	(function (_super) {
		__extends(root$Skin125, _super);
		function root$Skin125() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin125.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin125;
	})(eui.Skin);

	var root$Skin126 = 	(function (_super) {
		__extends(root$Skin126, _super);
		function root$Skin126() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin126.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin126;
	})(eui.Skin);

	var root$Skin127 = 	(function (_super) {
		__extends(root$Skin127, _super);
		function root$Skin127() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bank_json.BANK_BJYH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin127.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bank_json.BANK_BJYH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin127;
	})(eui.Skin);

	var root$Skin128 = 	(function (_super) {
		__extends(root$Skin128, _super);
		function root$Skin128() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin128.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin128;
	})(eui.Skin);

	var root$Skin129 = 	(function (_super) {
		__extends(root$Skin129, _super);
		function root$Skin129() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_LJDL")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin129.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_LJDL";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin129;
	})(eui.Skin);

	var root$Skin130 = 	(function (_super) {
		__extends(root$Skin130, _super);
		function root$Skin130() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_LJDL")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin130.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_LJDL";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin130;
	})(eui.Skin);

	var root$Skin131 = 	(function (_super) {
		__extends(root$Skin131, _super);
		function root$Skin131() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_LJDL")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin131.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_LJDL";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin131;
	})(eui.Skin);

	var root$Skin132 = 	(function (_super) {
		__extends(root$Skin132, _super);
		function root$Skin132() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_ZC")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin132.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_ZC";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin132;
	})(eui.Skin);

	var root$Skin133 = 	(function (_super) {
		__extends(root$Skin133, _super);
		function root$Skin133() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_close")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin133.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_close";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin133;
	})(eui.Skin);

	var root$Skin134 = 	(function (_super) {
		__extends(root$Skin134, _super);
		function root$Skin134() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_QHZH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin134.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_QHZH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin134;
	})(eui.Skin);

	var root$Skin135 = 	(function (_super) {
		__extends(root$Skin135, _super);
		function root$Skin135() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_XTSZ")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin135.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_XTSZ";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin135;
	})(eui.Skin);

	var root$Skin136 = 	(function (_super) {
		__extends(root$Skin136, _super);
		function root$Skin136() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_FZ")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin136.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_FZ";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin136;
	})(eui.Skin);

	var root$Skin137 = 	(function (_super) {
		__extends(root$Skin137, _super);
		function root$Skin137() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_BDZFB")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin137.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_BDZFB";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin137;
	})(eui.Skin);

	var root$Skin138 = 	(function (_super) {
		__extends(root$Skin138, _super);
		function root$Skin138() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_BDYHK")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin138.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_BDYHK";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin138;
	})(eui.Skin);

	var root$Skin139 = 	(function (_super) {
		__extends(root$Skin139, _super);
		function root$Skin139() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_SJZSZH")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin139.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_SJZSZH";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin139;
	})(eui.Skin);

	var root$Skin140 = 	(function (_super) {
		__extends(root$Skin140, _super);
		function root$Skin140() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","root_json.root_but_DJXG")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = root$Skin140.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "root_json.root_but_DJXG";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return root$Skin140;
	})(eui.Skin);

	function root() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Image1_i(),this._Button1_i(),this._Group1_i(),this._Label1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group12_i(),this._Group17_i(),this._Group21_i()];
	}
	var _proto = root.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.source = "root_BG_jpg";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1757;
		t.y = 57;
		t.skinName = root$Skin92;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 128;
		t.y = 783;
		t.elementsContent = [this._Button2_i(),this._Button3_i(),this._Button4_i()];
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = root$Skin93;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1298;
		t.y = 0;
		t.skinName = root$Skin94;
		return t;
	};
	_proto._Button4_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 652;
		t.y = 0;
		t.skinName = root$Skin95;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 30;
		t.text = "1.0.0.1";
		t.textAlign = "right";
		t.x = 1884;
		t.y = 1056;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Button5_i(),this._Button6_i(),this._Button7_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(9,9,14,13);
		t.source = "root_json.root_black_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 878;
		t.scale9Grid = new egret.Rectangle(64,64,64,64);
		t.source = "root_json.root_BG_W";
		t.width = 926;
		t.x = 497;
		t.y = 102;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(53,85,13,510);
		t.source = "root_json.root_BG_W1";
		t.width = 836;
		t.x = 542;
		t.y = 248;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_TC";
		t.x = 644;
		t.y = 115;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_Txt_DL";
		t.x = 874;
		t.y = 127;
		return t;
	};
	_proto._Button5_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1320;
		t.y = 149;
		t.skinName = root$Skin96;
		return t;
	};
	_proto._Button6_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 630;
		t.y = 641;
		t.skinName = root$Skin97;
		return t;
	};
	_proto._Button7_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1005;
		t.y = 641;
		t.skinName = root$Skin98;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_ZH";
		t.x = 606;
		t.y = 381;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_MM";
		t.x = 606;
		t.y = 517;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 570;
		t.x = 736;
		t.y = 363;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 570;
		t.x = 736;
		t.y = 498;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 46;
		t.text = "请输入手机号";
		t.textAlign = "left";
		t.textColor = 0xffbfba;
		t.x = 764;
		t.y = 383;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 46;
		t.text = "请输入6-20位密码";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 764;
		t.y = 518;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Button8_i(),this._Button9_i(),this._Button10_i(),this._Label4_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(9,9,14,13);
		t.source = "root_json.root_black_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 878;
		t.scale9Grid = new egret.Rectangle(64,64,64,64);
		t.source = "root_json.root_BG_W";
		t.width = 926;
		t.x = 497;
		t.y = 102;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(53,85,13,510);
		t.source = "root_json.root_BG_W1";
		t.width = 836;
		t.x = 542;
		t.y = 248;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_TC";
		t.x = 644;
		t.y = 115;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_Txt_TS";
		t.x = 874;
		t.y = 127;
		return t;
	};
	_proto._Button8_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1320;
		t.y = 149;
		t.skinName = root$Skin99;
		return t;
	};
	_proto._Button9_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 630;
		t.y = 641;
		t.skinName = root$Skin100;
		return t;
	};
	_proto._Button10_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1005;
		t.y = 641;
		t.skinName = root$Skin101;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 46;
		t.text = "您确定退出当前账号返回登陆？";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 638;
		t.y = 429;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Button11_i(),this._Button12_i(),this._Button13_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Label5_i(),this._Image25_i(),this._Image26_i(),this._Label6_i(),this._Image27_i(),this._Image28_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Image29_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(9,9,14,13);
		t.source = "root_json.root_black_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 878;
		t.scale9Grid = new egret.Rectangle(64,64,64,64);
		t.source = "root_json.root_BG_W";
		t.width = 926;
		t.x = 497;
		t.y = 102;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(53,85,13,510);
		t.source = "root_json.root_BG_W1";
		t.width = 836;
		t.x = 542;
		t.y = 248;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_TC";
		t.x = 644;
		t.y = 115;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_Txt_ZC";
		t.x = 874;
		t.y = 127;
		return t;
	};
	_proto._Button11_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1320;
		t.y = 149;
		t.skinName = root$Skin102;
		return t;
	};
	_proto._Button12_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 821;
		t.y = 799;
		t.skinName = root$Skin103;
		return t;
	};
	_proto._Button13_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1172;
		t.y = 380;
		t.skinName = root$Skin104;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_SJHM";
		t.x = 615;
		t.y = 299;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_YZM";
		t.x = 660;
		t.y = 407;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 450;
		t.x = 836;
		t.y = 281;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 319;
		t.x = 836;
		t.y = 388;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "请输入手机号";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 864;
		t.y = 299;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_SRMM";
		t.x = 615;
		t.y = 512;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 450;
		t.x = 836;
		t.y = 494;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "请输入6-20个字符";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 864;
		t.y = 512;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_QRMM";
		t.x = 615;
		t.y = 619;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 450;
		t.x = 836;
		t.y = 601;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "请输入6-20个字符";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 864;
		t.y = 619;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "已阅读并同意《服务协议》";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 808;
		t.y = 715;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "请输入验证码";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 864;
		t.y = 406;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_but_yes_a";
		t.x = 693;
		t.y = 686;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Button14_i(),this._Image35_i(),this._Image36_i(),this._Button15_i(),this._Button16_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(9,9,14,13);
		t.source = "root_json.root_black_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 878;
		t.scale9Grid = new egret.Rectangle(64,64,64,64);
		t.source = "root_json.root_BG_W";
		t.width = 926;
		t.x = 497;
		t.y = 102;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(53,85,13,510);
		t.source = "root_json.root_BG_W1";
		t.width = 836;
		t.x = 542;
		t.y = 248;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_TC";
		t.x = 644;
		t.y = 115;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_Txt_SZ";
		t.x = 874;
		t.y = 127;
		return t;
	};
	_proto._Button14_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1320;
		t.y = 149;
		t.skinName = root$Skin105;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_YX";
		t.x = 975;
		t.y = 575;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_YY";
		t.x = 588;
		t.y = 575;
		return t;
	};
	_proto._Button15_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 730;
		t.y = 538;
		t.skinName = root$Skin106;
		return t;
	};
	_proto._Button16_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1108;
		t.y = 538;
		t.skinName = root$Skin107;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i(),this._Button17_i(),this._Button18_i(),this._Image42_i(),this._Image43_i(),this._Label10_i(),this._Image44_i(),this._Image45_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i()];
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(9,9,14,13);
		t.source = "root_json.root_black_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.height = 878;
		t.scale9Grid = new egret.Rectangle(64,64,64,64);
		t.source = "root_json.root_BG_W";
		t.width = 926;
		t.x = 497;
		t.y = 102;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(53,85,13,510);
		t.source = "root_json.root_BG_W1";
		t.width = 836;
		t.x = 542;
		t.y = 248;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_TC";
		t.x = 644;
		t.y = 115;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_Txt_BDZFB";
		t.x = 750;
		t.y = 127;
		return t;
	};
	_proto._Button17_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1320;
		t.y = 149;
		t.skinName = root$Skin108;
		return t;
	};
	_proto._Button18_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 821;
		t.y = 696;
		t.skinName = root$Skin109;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_ZFBZH";
		t.x = 571;
		t.y = 319;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 450;
		t.x = 836;
		t.y = 301;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "请输入支付宝账号";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 864;
		t.y = 319;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_SMZMZ";
		t.x = 571;
		t.y = 494;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 450;
		t.x = 836;
		t.y = 476;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "请输入真实姓名";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 864;
		t.y = 494;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "提示：绑定后不可私自更改，如需修改，请联系在线客服。";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 570;
		t.y = 859;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "（请输入正确的支付账号，提交后不可更改）";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 560;
		t.y = 397;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 30;
		t.text = "（根据支付宝官方要求，用户需输入实名制名字后才能收款）";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 555;
		t.y = 571;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Image50_i(),this._Button19_i(),this._Button20_i(),this._Image51_i(),this._Image52_i(),this._Label15_i(),this._Image53_i(),this._Image54_i(),this._Label16_i(),this._Label17_i(),this._Group11_i(),this._Image55_i()];
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(9,9,14,13);
		t.source = "root_json.root_black_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.height = 878;
		t.scale9Grid = new egret.Rectangle(64,64,64,64);
		t.source = "root_json.root_BG_W";
		t.width = 1714;
		t.x = 103;
		t.y = 102;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 644;
		t.scale9Grid = new egret.Rectangle(53,85,13,510);
		t.source = "root_json.root_BG_W1";
		t.width = 1638;
		t.x = 141;
		t.y = 248;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_TC";
		t.x = 644;
		t.y = 115;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_Txt_BDZFB";
		t.x = 750;
		t.y = 127;
		return t;
	};
	_proto._Button19_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1712;
		t.y = 149;
		t.skinName = root$Skin110;
		return t;
	};
	_proto._Button20_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 821;
		t.y = 768;
		t.skinName = root$Skin111;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_ZSXM";
		t.x = 216;
		t.y = 287;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 338;
		t.x = 436;
		t.y = 269;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "请输入真实姓名";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 464;
		t.y = 287;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_txt_YHKZH";
		t.x = 807;
		t.y = 287;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_bb";
		t.width = 604;
		t.x = 1074;
		t.y = 269;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "请输入银行卡账号";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 1102;
		t.y = 287;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "提示：为了您的财产安全，绑定后不可私自更改;如需修改，请联系客服。";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 315;
		t.y = 905;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.x = 418;
		t.y = 378;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Button21_i(),this._Button22_i(),this._Button23_i(),this._Button24_i()];
		return t;
	};
	_proto._Button21_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = root$Skin112;
		return t;
	};
	_proto._Button22_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 96;
		t.skinName = root$Skin113;
		return t;
	};
	_proto._Button23_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 192;
		t.skinName = root$Skin114;
		return t;
	};
	_proto._Button24_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 288;
		t.skinName = root$Skin115;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.x = 280;
		t.y = 0;
		t.elementsContent = [this._Button25_i(),this._Button26_i(),this._Button27_i(),this._Button28_i()];
		return t;
	};
	_proto._Button25_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = root$Skin116;
		return t;
	};
	_proto._Button26_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 96;
		t.skinName = root$Skin117;
		return t;
	};
	_proto._Button27_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 192;
		t.skinName = root$Skin118;
		return t;
	};
	_proto._Button28_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 288;
		t.skinName = root$Skin119;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.x = 559;
		t.y = 0;
		t.elementsContent = [this._Button29_i(),this._Button30_i(),this._Button31_i(),this._Button32_i()];
		return t;
	};
	_proto._Button29_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = root$Skin120;
		return t;
	};
	_proto._Button30_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 96;
		t.skinName = root$Skin121;
		return t;
	};
	_proto._Button31_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 192;
		t.skinName = root$Skin122;
		return t;
	};
	_proto._Button32_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 288;
		t.skinName = root$Skin123;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.x = 838;
		t.y = 0;
		t.elementsContent = [this._Button33_i(),this._Button34_i(),this._Button35_i(),this._Button36_i()];
		return t;
	};
	_proto._Button33_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = root$Skin124;
		return t;
	};
	_proto._Button34_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 96;
		t.skinName = root$Skin125;
		return t;
	};
	_proto._Button35_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 192;
		t.skinName = root$Skin126;
		return t;
	};
	_proto._Button36_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 288;
		t.skinName = root$Skin127;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_bank_XZ";
		t.x = 1256;
		t.y = 474;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image56_i(),this._Image57_i(),this._Image58_i(),this._Image59_i(),this._Image60_i(),this._Button37_i(),this._Label18_i(),this._Label19_i(),this._Group13_i(),this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(9,9,14,13);
		t.source = "root_json.root_black_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.height = 878;
		t.scale9Grid = new egret.Rectangle(64,64,64,64);
		t.source = "root_json.root_BG_W";
		t.width = 1714;
		t.x = 103;
		t.y = 102;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 644;
		t.scale9Grid = new egret.Rectangle(53,85,13,510);
		t.source = "root_json.root_BG_W1";
		t.width = 1638;
		t.x = 141;
		t.y = 248;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_TC";
		t.x = 644;
		t.y = 115;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_Txt_QBZH";
		t.x = 792;
		t.y = 127;
		return t;
	};
	_proto._Button37_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1712;
		t.y = 149;
		t.skinName = root$Skin128;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "您可以使用以下账号进行登陆";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.x = 700;
		t.y = 263;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "提示：更换设备需要进行短信二次验证。";
		t.textAlign = "left";
		t.textColor = 0xFFBFBA;
		t.x = 600;
		t.y = 905;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.x = 186;
		t.y = 324;
		t.elementsContent = [this._Image61_i(),this._Button38_i(),this._Image62_i(),this._Image63_i(),this._Image64_i(),this._Label20_i(),this._Label21_i(),this._Label22_i()];
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 530;
		t.scale9Grid = new egret.Rectangle(34,42,23,19);
		t.source = "root_json.root_user_a";
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button38_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 76;
		t.y = 404;
		t.skinName = root$Skin129;
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_user_b";
		t.visible = false;
		t.x = 83;
		t.y = 92;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_Avatar";
		t.x = 89;
		t.y = 28;
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.source = "root_json.Avatar_00";
		t.x = 98;
		t.y = 40;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "昵称：游客51811929";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 45;
		t.y = 265;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "账户ID：51811929";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 60;
		t.y = 311;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "手机号：未绑定";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 88;
		t.y = 357;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.x = 615;
		t.y = 324;
		t.elementsContent = [this._Image65_i(),this._Button39_i(),this._Image66_i(),this._Image67_i(),this._Image68_i(),this._Label23_i(),this._Label24_i(),this._Label25_i()];
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 530;
		t.scale9Grid = new egret.Rectangle(34,42,23,19);
		t.source = "root_json.root_user_a";
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button39_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 76;
		t.y = 404;
		t.skinName = root$Skin130;
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_user_b";
		t.visible = false;
		t.x = 83;
		t.y = 92;
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_Avatar";
		t.x = 89;
		t.y = 28;
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.source = "root_json.Avatar_00";
		t.x = 98;
		t.y = 40;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "昵称：游客51811929";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 45;
		t.y = 265;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "账户ID：51811929";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 60;
		t.y = 311;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "手机号：未绑定";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 88;
		t.y = 357;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.x = 1043;
		t.y = 324;
		t.elementsContent = [this._Image69_i(),this._Button40_i(),this._Image70_i(),this._Image71_i(),this._Image72_i(),this._Label26_i(),this._Label27_i(),this._Label28_i()];
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 530;
		t.scale9Grid = new egret.Rectangle(34,42,23,19);
		t.source = "root_json.root_user_a";
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button40_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 76;
		t.y = 404;
		t.skinName = root$Skin131;
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_user_b";
		t.visible = false;
		t.x = 83;
		t.y = 92;
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_Avatar";
		t.x = 89;
		t.y = 28;
		return t;
	};
	_proto._Image72_i = function () {
		var t = new eui.Image();
		t.source = "root_json.Avatar_00";
		t.x = 98;
		t.y = 40;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "昵称：游客51811929";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 45;
		t.y = 265;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "账户ID：51811929";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 60;
		t.y = 311;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "手机号：未绑定";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 88;
		t.y = 357;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.x = 1472;
		t.y = 324;
		t.elementsContent = [this._Image73_i(),this._Button41_i(),this._Image74_i(),this._Image75_i(),this._Image76_i(),this._Label29_i(),this._Label30_i(),this._Label31_i()];
		return t;
	};
	_proto._Image73_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 530;
		t.scale9Grid = new egret.Rectangle(34,42,23,19);
		t.source = "root_json.root_user_a";
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Button41_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 76;
		t.y = 404;
		t.skinName = root$Skin132;
		return t;
	};
	_proto._Image74_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_user_b";
		t.x = 83;
		t.y = 92;
		return t;
	};
	_proto._Image75_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_Avatar";
		t.visible = false;
		t.x = 89;
		t.y = 28;
		return t;
	};
	_proto._Image76_i = function () {
		var t = new eui.Image();
		t.source = "root_json.Avatar_00";
		t.visible = false;
		t.x = 98;
		t.y = 40;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "昵称：游客51811929";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.visible = false;
		t.x = 45;
		t.y = 265;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "账户ID：51811929";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.visible = false;
		t.x = 60;
		t.y = 311;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "手机号：未绑定";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.visible = false;
		t.x = 88;
		t.y = 357;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.visible = false;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image77_i(),this._Image78_i(),this._Image79_i(),this._Image80_i(),this._Image81_i(),this._Button42_i(),this._Image82_i(),this._Label32_i(),this._Label33_i(),this._Label34_i(),this._Label35_i(),this._Label36_i(),this._Label37_i(),this._Button43_i(),this._Button44_i(),this._Button45_i(),this._Group18_i(),this._Group19_i(),this._Group20_i(),this._Button49_i(),this._Image86_i(),this._Image87_i()];
		return t;
	};
	_proto._Image77_i = function () {
		var t = new eui.Image();
		t.height = 1080;
		t.scale9Grid = new egret.Rectangle(9,9,14,13);
		t.source = "root_json.root_black_9";
		t.width = 1920;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image78_i = function () {
		var t = new eui.Image();
		t.height = 878;
		t.scale9Grid = new egret.Rectangle(64,64,64,64);
		t.source = "root_json.root_BG_W";
		t.width = 1714;
		t.x = 103;
		t.y = 102;
		return t;
	};
	_proto._Image79_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 664;
		t.scale9Grid = new egret.Rectangle(53,85,13,510);
		t.source = "root_json.root_BG_W1";
		t.width = 1236;
		t.x = 543;
		t.y = 248;
		return t;
	};
	_proto._Image80_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_TC";
		t.x = 644;
		t.y = 115;
		return t;
	};
	_proto._Image81_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_window_Txt_GRZX";
		t.x = 791;
		t.y = 127;
		return t;
	};
	_proto._Button42_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1712;
		t.y = 149;
		t.skinName = root$Skin133;
		return t;
	};
	_proto._Image82_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(42,10,32,66);
		t.source = "root_json.root_b_rB";
		t.width = 598;
		t.x = 742;
		t.y = 341;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "游客51811729";
		t.textAlign = "left";
		t.textColor = 0xffff00;
		t.x = 764;
		t.y = 352;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "账户ID：51811729";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.x = 586;
		t.y = 285;
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "昵	  	称：";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 586;
		t.y = 352;
		return t;
	};
	_proto._Label35_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "金		 币：2.88";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 586;
		t.y = 418;
		return t;
	};
	_proto._Label36_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "银	 	行：0.00";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 586;
		t.y = 485;
		return t;
	};
	_proto._Label37_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 32;
		t.text = "提示：如需更换绑定的支付宝、银行卡请联系官方在线客服。";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.x = 528;
		t.y = 917;
		return t;
	};
	_proto._Button43_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 173;
		t.y = 766;
		t.skinName = root$Skin134;
		return t;
	};
	_proto._Button44_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 173;
		t.y = 597;
		t.skinName = root$Skin135;
		return t;
	};
	_proto._Button45_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 1149;
		t.y = 246;
		t.skinName = root$Skin136;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.x = 580;
		t.y = 545;
		t.elementsContent = [this._Image83_i(),this._Label38_i(),this._Label39_i(),this._Button46_i()];
		return t;
	};
	_proto._Image83_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(245,10,19,58);
		t.source = "root_json.root_GRXX_B";
		t.width = 1018;
		t.x = 0;
		t.y = 15;
		return t;
	};
	_proto._Label38_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "支付宝";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.x = 6;
		t.y = 28;
		return t;
	};
	_proto._Label39_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "未绑定";
		t.textAlign = "left";
		t.textColor = 0xFFFF00;
		t.x = 368;
		t.y = 28;
		return t;
	};
	_proto._Button46_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 731;
		t.y = 0;
		t.skinName = root$Skin137;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.x = 580;
		t.y = 659;
		t.elementsContent = [this._Image84_i(),this._Label40_i(),this._Label41_i(),this._Button47_i()];
		return t;
	};
	_proto._Image84_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(245,10,19,58);
		t.source = "root_json.root_GRXX_B";
		t.width = 1018;
		t.x = 0;
		t.y = 15;
		return t;
	};
	_proto._Label40_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "银行卡";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 6;
		t.y = 28;
		return t;
	};
	_proto._Label41_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "未绑定";
		t.textAlign = "left";
		t.textColor = 0xFFFF00;
		t.x = 368;
		t.y = 28;
		return t;
	};
	_proto._Button47_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 731;
		t.y = 0;
		t.skinName = root$Skin138;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.x = 580;
		t.y = 772;
		t.elementsContent = [this._Image85_i(),this._Label42_i(),this._Label43_i(),this._Button48_i()];
		return t;
	};
	_proto._Image85_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(245,10,19,58);
		t.source = "root_json.root_GRXX_B";
		t.width = 1018;
		t.x = 0;
		t.y = 15;
		return t;
	};
	_proto._Label42_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "手机号";
		t.textAlign = "left";
		t.textColor = 0xFFFFFF;
		t.x = 6;
		t.y = 28;
		return t;
	};
	_proto._Label43_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 42;
		t.text = "未绑定";
		t.textAlign = "left";
		t.textColor = 0xFFFF00;
		t.x = 368;
		t.y = 28;
		return t;
	};
	_proto._Button48_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 731;
		t.y = 0;
		t.skinName = root$Skin139;
		return t;
	};
	_proto._Button49_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 251;
		t.y = 449;
		t.skinName = root$Skin140;
		return t;
	};
	_proto._Image86_i = function () {
		var t = new eui.Image();
		t.source = "root_json.root_Avatar";
		t.x = 230;
		t.y = 217;
		return t;
	};
	_proto._Image87_i = function () {
		var t = new eui.Image();
		t.source = "root_json.Avatar_00";
		t.x = 242;
		t.y = 228;
		return t;
	};
	return root;
})(eui.Skin);generateEUI.paths['resource/scene/win.exml'] = window.winGame = (function (_super) {
	__extends(winGame, _super);
	var winGame$Skin141 = 	(function (_super) {
		__extends(winGame$Skin141, _super);
		function winGame$Skin141() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = winGame$Skin141.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesuan_json.继续游戏";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return winGame$Skin141;
	})(eui.Skin);

	var winGame$Skin142 = 	(function (_super) {
		__extends(winGame$Skin142, _super);
		function winGame$Skin142() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = winGame$Skin142.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "jiesuan_json.返回大厅";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return winGame$Skin142;
	})(eui.Skin);

	function winGame() {
		_super.call(this);
		this.skinParts = ["winImg","continue_btn","leave_btn","nickName_txt_1","times_txt_1","gold_txt_1","nickName_txt_0","times_txt_0","gold_txt_0","nickName_txt_2","times_txt_2","gold_txt_2"];
		
		this.height = 1020;
		this.width = 1980;
		this.elementsContent = [this._Image1_i(),this.winImg_i(),this.continue_btn_i(),this.leave_btn_i(),this.nickName_txt_1_i(),this.times_txt_1_i(),this.gold_txt_1_i(),this.nickName_txt_0_i(),this.times_txt_0_i(),this.gold_txt_0_i(),this.nickName_txt_2_i(),this.times_txt_2_i(),this.gold_txt_2_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
	}
	var _proto = winGame.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "jiesuan_json.dialog_bg_small";
		t.verticalCenter = 0;
		return t;
	};
	_proto.winImg_i = function () {
		var t = new eui.Image();
		this.winImg = t;
		t.fillMode = "repeat";
		t.source = "jiesuan_json.你赢了";
		t.x = 517;
		t.y = 66;
		return t;
	};
	_proto.continue_btn_i = function () {
		var t = new eui.Button();
		this.continue_btn = t;
		t.label = "";
		t.x = 1092.45;
		t.y = 668.04;
		t.skinName = winGame$Skin141;
		return t;
	};
	_proto.leave_btn_i = function () {
		var t = new eui.Button();
		this.leave_btn = t;
		t.label = "";
		t.x = 555.36;
		t.y = 668.04;
		t.skinName = winGame$Skin142;
		return t;
	};
	_proto.nickName_txt_1_i = function () {
		var t = new eui.Label();
		this.nickName_txt_1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "玩家1";
		t.textAlign = "center";
		t.textColor = 0xefefef;
		t.width = 264;
		t.x = 443.15;
		t.y = 429.4;
		return t;
	};
	_proto.times_txt_1_i = function () {
		var t = new eui.Label();
		this.times_txt_1 = t;
		t.bold = true;
		t.size = 40;
		t.text = "1";
		t.textColor = 0xefefef;
		t.x = 978.15;
		t.y = 429.4;
		return t;
	};
	_proto.gold_txt_1_i = function () {
		var t = new eui.Label();
		this.gold_txt_1 = t;
		t.bold = true;
		t.size = 40;
		t.text = "金币数";
		t.textColor = 0xefefef;
		t.x = 1334.97;
		t.y = 429.4;
		return t;
	};
	_proto.nickName_txt_0_i = function () {
		var t = new eui.Label();
		this.nickName_txt_0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "玩家1";
		t.textAlign = "center";
		t.textColor = 0xEFEFEF;
		t.width = 264;
		t.x = 443.15;
		t.y = 509.4;
		return t;
	};
	_proto.times_txt_0_i = function () {
		var t = new eui.Label();
		this.times_txt_0 = t;
		t.bold = true;
		t.size = 40;
		t.text = "1";
		t.textColor = 0xEFEFEF;
		t.x = 978.15;
		t.y = 509.4;
		return t;
	};
	_proto.gold_txt_0_i = function () {
		var t = new eui.Label();
		this.gold_txt_0 = t;
		t.bold = true;
		t.size = 40;
		t.text = "金币数";
		t.textColor = 0xEFEFEF;
		t.x = 1334.97;
		t.y = 509.4;
		return t;
	};
	_proto.nickName_txt_2_i = function () {
		var t = new eui.Label();
		this.nickName_txt_2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 40;
		t.text = "玩家1";
		t.textAlign = "center";
		t.textColor = 0xEFEFEF;
		t.width = 264;
		t.x = 443.21;
		t.y = 591.4;
		return t;
	};
	_proto.times_txt_2_i = function () {
		var t = new eui.Label();
		this.times_txt_2 = t;
		t.bold = true;
		t.size = 40;
		t.text = "1";
		t.textColor = 0xEFEFEF;
		t.x = 978.21;
		t.y = 591.4;
		return t;
	};
	_proto.gold_txt_2_i = function () {
		var t = new eui.Label();
		this.gold_txt_2 = t;
		t.bold = true;
		t.size = 40;
		t.text = "金币数";
		t.textColor = 0xEFEFEF;
		t.x = 1335.03;
		t.y = 591.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "jiesuan_json.玩家";
		t.x = 526.15;
		t.y = 329.4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "jiesuan_json.倍数";
		t.x = 939.15;
		t.y = 329.4;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "jiesuan_json.金币";
		t.x = 1351.15;
		t.y = 330.4;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "jiesuan_json.dizhuying";
		t.x = 123;
		t.y = 173;
		return t;
	};
	return winGame;
})(eui.Skin);