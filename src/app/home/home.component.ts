import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = [];

  constructor(private service: HttpService) { }

  ngOnInit(): void {
    this.service.getdata().subscribe((res) => {
      console.log(res);
      this.data = res;

    })
  }


  async Delete(userId: number) {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteItem(userId).subscribe(() => {
          this.service.getdata().subscribe((response: any) => {
            console.log(response);
            this.data = response;


          });
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });;
        });
      } else {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    
    });


}

}
