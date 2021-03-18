export default {
  name: 'Tên',
  tel: 'Số điện thoại',
  save: 'Lưu',
  confirm: 'Xác nhận',
  cancel: 'Hủy bỏ',
  delete: 'Xóa',
  complete: 'Thành công',
  loading: 'Đang tải...',
  telEmpty: 'Vui lòng điền số điện thoại',
  nameEmpty: 'Vui lòng điền tên',
  nameInvalid: 'Tên không đúng định dạng',
  confirmDelete: 'Bạn có chắc chắn muốn xóa?',
  telInvalid: 'Số điện thoại không đúng định dạng',
  vanCalendar: {
    end: 'Kết thúc',
    start: 'Bắt đầu',
    title: 'Lịch',
    startEnd: 'Bắt đầu/Kết thúc',
    weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    monthTitle: (year, month) => `${year}/${month}`,
    rangePrompt: (maxRange) => `Chọn không quá ${maxRange} ngày`
  },
  vanCascader: {
    select: 'Chọn'
  },
  vanContactCard: {
    addText: 'Thêm thông tin liên hệ'
  },
  vanContactList: {
    addText: 'Thêm liên hệ'
  },
  vanPagination: {
    prev: 'Trước',
    next: 'Kế tiếp'
  },
  vanPullRefresh: {
    pulling: 'Kéo để làm mới...',
    loosing: 'Loose to refresh...'
  },
  vanSubmitBar: {
    label: 'Tổng：'
  },
  vanCoupon: {
    unlimited: 'Không giới hạn',
    discount: (discount) => `Giảm ${discount * 10}%`,
    condition: (condition) => `Ít nhất ${condition}`
  },
  vanCouponCell: {
    title: 'Phiếu giảm giá',
    tips: 'Không có phiếu giảm giá',
    count: (count) => `Bạn có ${count} phiếu giảm giá`
  },
  vanCouponList: {
    empty: 'Không có phiếu giảm giá',
    exchange: 'Giao dịch',
    close: 'Đóng',
    enable: 'Có sẵn',
    disabled: 'Không có sẵn',
    placeholder: 'Mã giảm giá'
  },
  vanAddressEdit: {
    area: 'Khu vực',
    postal: 'Bưu chính',
    areaEmpty: 'Vui lòng chọn khu vực nhận hàng',
    addressEmpty: 'Địa chỉ không được để trống',
    postalEmpty: 'Mã bưu điện không đúng',
    defaultAddress: 'Set as the default address',
    telPlaceholder: 'Số điện thoại',
    namePlaceholder: 'Tên',
    areaPlaceholder: 'Khu vực'
  },
  vanAddressEditDetail: {
    label: 'Địa chỉ',
    placeholder: 'Địa chỉ'
  },
  vanAddressList: {
    add: 'Thêm địa chỉ mới'
  }
}
